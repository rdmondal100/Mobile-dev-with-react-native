import { View, Text, Image } from 'react-native'
import React from 'react'

const ImageComponent = () => {
  return (
    <View>
      <Text>
        Explore the image
      </Text>
      <Image style={
        {
            height: 400,
            width:"90%",
            display:"flex",
            margin:"auto",
            borderRadius:10,
            marginTop:20
            
        }
      } source={require("../assets/download.jpeg")}/>
    </View>
  )
}

export default ImageComponent