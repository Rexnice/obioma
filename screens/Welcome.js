import { StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import Button from '../components/Button';
import COLORS from '../constants/colors';

const Welcome = ({navigation}) => {
  return (    
    <View style={styles.container}>
        <View style={styles.topContainer}>
            <Text style={styles.h1}>Obioma</Text>
            <Text style={styles.h2}>Your personal online tailor</Text>
        </View>
        <View style={styles.middleContainer}>
            <Image
            source={require("C:/Users/#emmyCode/Desktop/ErnestProject/ellastic/assets/firstImg.jpg")}
            style={styles.image}
            />
        </View>
        {/* <ProgressViewIOS number={1}/> */}
        <Button
        title='Sign up'
        style={{marginTop:22, width:'80%'}}
        onPress={()=>navigation.navigate("Signup")}
        />
        <View style={{
            flexDirection:'row',
            marginTop:30,
            justifyContent:'center'
        }}>
            <Text
            style={{fontSize:16,
            color:COLORS.black}}
            >Already have an account ?</Text>
            <Pressable
            onPress={()=>navigation.navigate("Login")}>
                <Text
                style={{fontSize:16,
                    color:COLORS.primary,
                    fontWeight:'bold',
                    marginLeft:4,
                    paddingBottom:50,
                }}
                >Login</Text>
            </Pressable>
        </View>
    </View>
  )
}
export default Welcome;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-between',
        backgroundColor:'white',
        alignItems:'center',
        width:'100%',
    },
    topContainer:{
      flex:2,
      justifyContent:'center',
      alignItems:'center',
    },
    middleContainer:{
      flex:3,
      justifyContent:'flex-start',
      alignItems:"center",
    },
    bottomContainer:{
      justifyContent:'flex-end',
      width:'90%',
      margin:20,
      padding:10,
    },
    h1:{
      // color:'orange',
      color:'orange',
      fontSize: 30,
    },
    h2:{
        color: 'black',
        fontSize:18,
        marginTop:8,
    },
    image:{
        width:250,
        height:200,
        justifyContent: "center",
        opacity:0.99,
    },
    buttonContainer:{
        backgroundColor:"#008F68",
        borderRadius:15,
        padding:8,
        margin:8,
    },
    button:{
        width:20,
        height:10,
        backgroundColor:'red',
        borderRadius:10,
    },
    SignUpText:{
      textAlign:'center',
      color:'white',
      fontSize:18,
    }
  
  })



