// import { StyleSheet, Text, View, Image, Pressable} from 'react-native';
// import React from 'react';
// import Button from '../components/Button';
// import COLORS from '../constants/colors';
// import { ImageBackground } from 'react-native';



// const Welcome = ({navigation}) => {
//   return (    
//     <View style={styles.container}>
//         <View style={styles.topContainer}>
//             <Text style={styles.h1}>Obioma</Text>
//             <Text style={styles.h2}>Your personal online tailor</Text>
//         </View>
//         <View style={styles.middleContainer}>
//             <Image
//             source={require("C:/Users/#emmyCode/Desktop/ErnestProject/obioma/assets/firstImg.jpg")}
//             style={styles.image}
//             />
//         </View>
//         {/* <ProgressViewIOS number={1}/> */}
//         <Button
//         title='Sign up'
//         style={{marginTop:22, width:'80%'}}
//         onPress={()=>navigation.navigate("Signup")}
//         />
//         <View style={{
//             flexDirection:'row',
//             marginTop:30,
//             justifyContent:'center'
//         }}>
//             <Text
//             style={{fontSize:16,
//             color:COLORS.black}}
//             >Already have an account ?</Text>
//             <Pressable
//             onPress={()=>navigation.navigate("Login")}>
//                 <Text
//                 style={{fontSize:16,
//                     color:COLORS.primary,
//                     fontWeight:'bold',
//                     marginLeft:4,
//                     paddingBottom:50,
//                 }}
//                 >Login</Text>
//             </Pressable>
//         </View>
//     </View>
//   )
// }
// export default Welcome;

// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         justifyContent:'space-between',
//         backgroundColor:'white',
//         alignItems:'center',
//         width:'100%',
//     },
//     topContainer:{
//       flex:2,
//       justifyContent:'center',
//       alignItems:'center',
//     },
//     middleContainer:{
//       flex:3,
//       justifyContent:'flex-start',
//       alignItems:"center",
//     },
//     bottomContainer:{
//       justifyContent:'flex-end',
//       width:'90%',
//       margin:20,
//       padding:10,
//     },
//     h1:{
//       // color:'orange',
//       color:'orange',
//       fontSize: 30,
//     },
//     h2:{
//         color: 'black',
//         fontSize:18,
//         marginTop:8,
//     },
//     image:{
//         width:250,
//         height:200,
//         justifyContent: "center",
//         opacity:0.99,
//     },
//     buttonContainer:{
//         backgroundColor:"#008F68",
//         borderRadius:15,
//         padding:8,
//         margin:8,
//     },
//     button:{
//         width:20,
//         height:10,
//         backgroundColor:'red',
//         borderRadius:10,
//     },
//     SignUpText:{
//       textAlign:'center',
//       color:'white',
//       fontSize:18,
//     }
  
//   })

import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity
} from "react-native";
import React from "react";
import COLORS from "../constants/colors";
import { NavigationContainer } from "@react-navigation/native";
const {height} = Dimensions.get('window');


const Welcome = ({navigation}) =>{
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'white', marginTop:StatusBar.currentHeight}}>
      <View>  
        <ImageBackground style={{
          height:height/2.5,
          backgroundColor:'white',
          marginTop:18
        }}
        resizeMode="contain" 
        source={require("C:/Users/#emmyCode/Desktop/ErnestProject/obioma/assets/firstImg.jpg")}/>
        <View style={{paddingHorizontal:25, paddingTop:14}}>
          <Text style={styles.text1}>Discover Amazing Designers</Text>
          <Text style={styles.text2}>Explore all the amazing designs by top fashion designers in the industry</Text>
        </View>
        <View style={{paddingHorizontal:8, paddingTop:50, flexDirection:'row', margin:10, justifyContent:'space-around'}}>
          <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={{backgroundColor:COLORS.primary, paddingVertical:6, paddingHorizontal:8, width:'48%', borderRadius:6}}>
            <Text style={styles.text3}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('Signup')} style={{backgroundColor:COLORS.silver, paddingVertical:6, paddingHorizontal:8, width:'48%', borderRadius:6}}>
            <Text style={styles.text4}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Welcome;

const styles = StyleSheet.create({
text1:{
    fontSize:25,
    color:COLORS.primary,
    fontFamily:'',
    fontWeight:'bold',
    textAlign:'center',
    paddingTop:15
  },
  text2:{ 
    fontSize:12,
    color:'black',
    fontFamily:'',
    textAlign:'center',
    marginTop:25,
  },
  text3:{
    fontFamily:'',
    color:'white',
    fontSize:20,
    textAlign:'center',
  },
  text4:{
    fontFamily:'',
    color:'black',
    fontSize:20,
    textAlign:'center',
  
  }

});