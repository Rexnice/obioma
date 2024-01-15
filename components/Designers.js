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
            <ImageBackground imageStyle={{borderRadius:8}} style={{aspectRatio:5/6, height:170}} source={{uri:item.image}}>

            </ImageBackground>
            <Text style={{marginTop:10,fontSize:17, fontWeight:'500'}}>{item.name}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  )
}

export default Designers

const styles = StyleSheet.create({})