 
import { View, Text,StyleSheet,TouchableOpacity} from 'react-native'
import RtcEngine from "react-native-agora";
import React, { useEffect, useRef,useState } from "react";
import { PermissionsAndroid } from "react-native";
import { ChannelProfile } from "react-native-agora"; 

import { ClientRole } from "react-native-agora";
import { Dimensions } from "react-native";

const dimensions = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};
import { RtcLocalView, RtcRemoteView } from "react-native-agora";
import { Share } from "react-native";


import { ActivityIndicator } from "react-native";

const Livescreen = (props) => {
  const onSwitchCamera = () => AgoraEngine.current.switchCamera();

  const onShare = async () => {
    try {
      await Share.share({ message: props.route.params.channel });
    } catch (error) {
      console.log(error.message);
    }
  };
    const [joined, setJoined] = useState(false);
    const AgoraEngine = useRef();
    const isBroadcaster = props.route.params.type === "create";
    async function requestCameraAndAudioPermission() {
        try {
          const granted = await PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.CAMERA,
            PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
          ]);
          if (
            granted["android.permission.RECORD_AUDIO"] === PermissionsAndroid.RESULTS.GRANTED &&
            granted["android.permission.CAMERA"] === PermissionsAndroid.RESULTS.GRANTED
          ) {
            console.log("You can use the cameras & mic");
          } else {
            console.log("Permission denied");
          }
        } catch (err) {
          console.warn(err);
        }
      }



      const init = async () => {
        AgoraEngine.current = await RtcEngine.create("989ea2f7d45c4e7eba16b4cc21a7949a");
        AgoraEngine.current.enableVideo();
        AgoraEngine.current.setChannelProfile(ChannelProfile.LiveBroadcasting);
        if (isBroadcaster) AgoraEngine.current.setClientRole(ClientRole.Broadcaster);
        AgoraEngine.current.addListener("JoinChannelSuccess", (channel, uid, elapsed)=>
    console.log("JoinChannelSuccess", channel, uid, elapsed) 
        )
        setJoined(true);
      };






    useEffect(async () => {
        if (Platform.OS === 'android')  await requestCameraAndAudioPermission();
        const uid = isBroadcaster ? 1 : 0;
        init().then(() => AgoraEngine.current.joinChannel(null, props.route.params.channel, null, uid));
          return () => {
        AgoraEngine.current.destroy();
      };
      }, []);
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    {!joined ? (
      <>
        <ActivityIndicator
          size={60}
          color="#222"
          style={styles.activityIndicator}
        />
        <Text style={styles.loadingText}>Joining Stream, Please Wait</Text>
      </>
    ) : ( 
      <>
      {isBroadcaster ? (
        <RtcLocalView.SurfaceView 
          style={styles.fullscreen} 
          channelId={props.route.params.channel} 
        />
      ) : (
        <RtcRemoteView.SurfaceView 
          uid={1} 
          style={styles.fullscreen} 
          channelId={props.route.params.channel} 
        />
      )}
      
    </>
    
    )}
    <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.button} onPress={onShare}>
      <Text style={styles.shareText}>Share</Text>
    </TouchableOpacity>
  </View>
  <View style={styles.buttonContainer}>
   
  <TouchableOpacity style={{}} onPress={onSwitchCamera}>
    <Text style={styles.buttonText}>Switch Camera</Text>
  </TouchableOpacity>
</View>
    <>
 
</>

  </View>
  
    )
}


const styles = StyleSheet.create({
    loadingText: {
        fontSize: 18,
        color: '#222',
      },
      fullscreen: {
        width: dimensions.width,
        height: dimensions.height,
      },
      buttonContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
      },
      button: {
        width: 150,
        backgroundColor: '#fff',
        marginBottom: 50,
        paddingVertical: 13,
        borderRadius: 8,
        alignItems: 'center',
        marginHorizontal: 10,
      },
      buttonText: {
        fontSize: 17,
      },
      
  });
export default Livescreen
