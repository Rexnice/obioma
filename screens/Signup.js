import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Pressable,
    StatusBar,
  } from "react-native";
  import React from "react";
  import { SafeAreaView } from "react-native-safe-area-context";
  import COLORS from "../constants/colors";
  import { useNavigation } from "@react-navigation/native";
  import { AntDesign } from '@expo/vector-icons';
  
  const Signup = () => {
    const navigation = useNavigation();
    return (
      <SafeAreaView
        style={{ flex: 1, color: "white", marginTop: StatusBar.currentHeight }}
      >
        <View style={styles.container1}>
          <View style={styles.container2}>
            <Text style={styles.text1}>Create account</Text>
            <Text style={styles.text2}>create an account so you can explore all amazing cloth designs</Text>
          </View>
          <View style={{marginVertical:18}}>
            <TextInput
              placeholder="Email"
              placeholderTextColor={COLORS.black}
              style={{ padding: 8, backgroundColor: COLORS.silver, fontSize: 12, borderRadius:8, marginVertical:8 }}
            ></TextInput>
            <TextInput
              placeholder="Password"
              secureTextEntry
              placeholderTextColor={COLORS.black}
              style={{ padding: 8, backgroundColor: COLORS.silver, fontSize: 12, borderRadius:8, marginVertical:8 }}
            ></TextInput>
            <TextInput
              placeholder="Confirm Password"
              secureTextEntry
              placeholderTextColor={COLORS.black}
              style={{ padding: 8, backgroundColor: COLORS.silver, fontSize: 12, borderRadius:8, marginVertical:8 }}
            ></TextInput>
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate('HomePageScreen')} style={{
            padding:12,
            backgroundColor:COLORS.primary,
            marginVertical:20,
            borderRadius:6,
            shadowColor:COLORS.primary,
            shadowOffset:{
              width:0,
              height:3,
            },
            shadowOpacity:0.3,
            shadowRadius:3,
          }}>
            <Text style={{
              color:COLORS.white,
              fontWeight:'bold',
              textAlign:'center',
              fontSize:18,
            }}>Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={{
            padding:12,
          }}>
            <Text style={{
              color:COLORS.black,
              fontWeight:'bold',
              textAlign:'center',
              fontSize:13,
              marginVertical:10,
            }}>Already have an account?</Text>
          </TouchableOpacity>
          <View style={{marginVertical:10}}>
            <Text style={{color:COLORS.primary, textAlign:'center', fontSize:10, fontWeight:'900'}}>Or continue with</Text>
          </View>
          <View style={{
            marginTop:5,
            flexDirection:'row',
            justifyContent:'center'
          }}>
            <TouchableOpacity style={{
              padding:6,
              backgroundColor:COLORS.grey,
              borderRadius:3,
              marginHorizontal:6,
            }}>
              <AntDesign name="google" size={12} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={{
              padding:6,
              backgroundColor:COLORS.grey,
              borderRadius:3,
              marginHorizontal:6,
            }}>
              <AntDesign name="apple1" size={12} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={{
              padding:6,
              backgroundColor:COLORS.grey,
              borderRadius:3,
              marginHorizontal:8,
            }}>
              <AntDesign name="facebook-square" size={12} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  export default Signup;
  
  const styles = StyleSheet.create({
    container1: {
      padding: 6,
    },
    container2: {
      alignItems: "center",
    },
    text1: {
      fontSize: 25,
      fontWeight: "bold",
      color: COLORS.primary,
      marginVertical: 12,
    },
    text2: {
      fontSize: 12,
      color: COLORS.black,
      fontWeight: "900",
      maxWidth:'60%',
      textAlign:'center',
      marginVertical:12,
    },
  });
  

