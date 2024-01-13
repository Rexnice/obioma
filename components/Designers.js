import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import designers from '../data/designers';

const Designers = () => {
  const data = designers;
  return (
    <View style={{margin:10}}>
      <Text style={{fontSize:16, fontWeight:'500'}}>Meet Amazing Designers</Text>
      <ScrollView>

      </ScrollView>
    </View>
  )
}

export default Designers

const styles = StyleSheet.create({})