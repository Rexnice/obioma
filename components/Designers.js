import { StyleSheet, Text, View, ScrollView, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import designers from '../data/designers';

const Designers = () => {
  const data = designers;
  return (
    <View style={{margin:10}}>
      <Text style={{fontSize:16, fontWeight:'500'}}>Meet Amazing Designers</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => (
          <Pressable style={{margin:10}} key={index}>
            <ImageBackground style={{aspectRatio:5/6, height:170}} source={{uri:item.image}}>

            </ImageBackground>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  )
}

export default Designers

const styles = StyleSheet.create({})