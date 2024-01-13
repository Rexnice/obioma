import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import {SliderBox} from 'react-native-image-slider-box';
// import { ViewPropTypes} from "deprecated-react-native-prop-types";
import { ImageSlider } from "react-native-image-slider-banner";


const Carousel = () => {
  return (
    <View style={{margin:10,}}>
        <ImageSlider 
        data={[
                {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU'},
                {img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg'},
                {img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg'},
                {img:"https://source.unsplash.com/1024x768/?girl"},
                {img:"https://source.unsplash.com/1024x768/?tree"},
        ]}
        autoPlay={false}
        onItemChanged={(item) => console.log("item", item)}
        closeIconColor="#fff"
        caroselImageStyle={{
            height:180,
            borderRadius:7,

            
        }}
    />
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({})