import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Fillter = () => {
  return (
    <View style={{flexDirection:'row', margin:10, marginTop:-1, alignItems:'center', justifyContent:'space-around'}}>  
        <Pressable style={styles.pressableStyle}>
            <View style={{flexDirection:'row'}}>
                <Text style={{marginRight:4}}>Filter</Text>
                <Ionicons name="filter" size={18} color="black" />
            </View>
        </Pressable>
        <Pressable style={styles.pressableStyle}>
            <View style={{flexDirection:'row'}}>
                <Text style={{marginRight:4}}>location</Text>
                <MaterialIcons name="location-pin" size={18} style={{justifyContent:'center'}} color="black" />
            </View>
        </Pressable>
        <Pressable style={styles.pressableStyle}>
            <View style={{flexDirection:'row'}}>
                <Text style={{marginRight:4}}>ratings</Text>
                <MaterialCommunityIcons name="star-circle" size={18} color="black" />
            </View>
        </Pressable>
        <Pressable style={styles.pressableStyle}>
            <View style={{flexDirection:'row'}}>
              <Text style={{marginRight:4}}>price</Text>
              <Entypo name="wallet" size={18} color="black" />
            </View>
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