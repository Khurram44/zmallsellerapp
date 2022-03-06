import React from 'react'
import { View, Text } from 'react-native'

const Managereviewsbottom = () => {
    const renderContent = () => (
        <View
          style={{
            backgroundColor: 'green',
            padding: 16,
            height: 450,
          }}
        >
          <Text>Swipe down to close</Text>
        </View>
      );
     
      const sheetRef = React.useRef(null);
     
    return (
        <View>
          <BottomSheet
        ref={sheetRef}
        snapPoints={[250, 100, 0]}
        borderRadius={50}
        renderContent={renderContent}
        
      />
        </View>
    )
}

export default Managereviewsbottom
