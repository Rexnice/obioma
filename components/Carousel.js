import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {SliderBox} from 'react-native-image-slider-box'


const Carousel = () => {
    const images = [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree",
      ];
  return (
    <View>
      <SliderBox
        images={images}
        autoPlay
        circleLoop
        dotColor='#13274f'
        inactiveDotColor='9BA4AE'
        ImageComponentStyle={{borderRadius:6}}
    />
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({})