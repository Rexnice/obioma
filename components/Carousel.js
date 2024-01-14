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
                {img: 'https://www.amplifyafrica.org/wp-content/uploads/2022/03/file-1078.png'},
                {img: 'https://i.pinimg.com/736x/a8/fd/30/a8fd300a91d0564c9270346191b930c9.jpg'},
                {img: 'https://bestlagos.com/wp-content/uploads/2023/10/native-wear.jpg'},
                {img:"https://i0.wp.com/hadaright.com/wp-content/uploads/2023/10/1000020632.jpg?fit=810%2C1080&ssl=1"},
                {img:"https://dejiandkola.com/wp-content/uploads/2024/01/413997974_18015074333003708_8539064074035695999_n-433x516.jpg"},
        ]}
        autoPlay={true}
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