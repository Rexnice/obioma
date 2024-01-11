import { StyleSheet, Text, View, SafeAreaView, TextInput, StatusBar } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import COLORS from "../constants/colors";
import Carousel from "../components/Carousel";

const HomePageScreen = () => {
  return (
    <SafeAreaView style={{flex:1, marginTop:StatusBar.currentHeight}}>
      <View style={styles.style}>
        <TextInput placeholder="Search for amazing designs"/>
        <AntDesign name='search1' size={24} color='#FF033E'/>
      </View>
      <Carousel/>
    </SafeAreaView>
  );
};

export default HomePageScreen;

const styles = StyleSheet.create({
  style:{
    flexDirection: "row",
    alignItem: "center",
    justifyContent: "space-between",
    borderWidth:1,
    margin:10,
    padding:10,
    borderColor:"#COCOCO",
    borderRadius:7,
  },
});
