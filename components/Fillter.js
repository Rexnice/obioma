import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const Fillter = () => {
  return (
    <View style={{flexDirection:'row', margin:10, marginTop:-1, alignItems:'center', justifyContent:'space-around'}}>  
        <Pressable style={styles.pressableStyle}>
          <Text>Filter</Text>
        </Pressable>
        <Pressable style={styles.pressableStyle}>
          <Text>location</Text>
        </Pressable>
        <Pressable style={styles.pressableStyle}>
          <Text>Filter</Text>
        </Pressable>
        <Pressable style={styles.pressableStyle}>
          <Text>Filter</Text>
        </Pressable>
      </View>
  )
}

export default Fillter

const styles = StyleSheet.create({
    pressableStyle:{
        marginHorizontal:10,
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#000000',
        padding:10,
        borderRadius:10,
        justifyContent:'space-around',
        width:80
      },
})