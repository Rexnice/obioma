import { StyleSheet, Text, View, TextInput, ScrollView, Pressable, TouchableOpacity} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors';


const Signup = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeAView}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container1}>
                <View style={styles.container2}>
                    <Text style={styles.text1}>
                        Create Account
                    </Text>
                    <Text style={styles.text2}>
                        Connect with amazing tailors within Nigeria
                    </Text>
                </View>
                <View style={styles.container3}>
                    <Text style={styles.text3}>Name</Text>
                    <TextInput 
                    placeholder="Enter your name"
                    placeholderTextColor ={COLORS.black}
                    style={{
                        width:'100%'
                    }}
                    />
                </View>
                <View style={styles.container3}>
                    <Text style={styles.text3}>Email address</Text>
                    <TextInput 
                    placeholder="Enter your email"
                    placeholderTextColor ={COLORS.black}
                    keyboardType='email-address'
                    style={{
                        width:'100%'
                    }}
                    />
                </View>
                <View style={styles.container3}>
                    <Text style={styles.text3}>City</Text>
                    <TextInput 
                    placeholder="Enter your City"
                    placeholderTextColor ={COLORS.black}
                    style={{
                        width:'100%'
                    }}
                    />
                </View>
                <View style={styles.container3}>
                    <Text style={styles.text3}>Password</Text>
                    <TextInput 
                    placeholder="Enter your password"
                    placeholderTextColor ={COLORS.black}
                    secureTextEntry={true}
                    style={{
                        width:'100%'
                    }}
                    />
                </View>
                <View style={styles.container3}>
                    <Text style={styles.text3}>Confirm password</Text>
                    <TextInput 
                    placeholder="Confirm your password"
                    placeholderTextColor ={COLORS.black}
                    secureTextEntry={true}
                    style={{
                        width:'100%'
                    }}
                    />
                </View>
                <TouchableOpacity
                    onPress ={()=>navigation.navigate("Login")} 
                    style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Signup

const styles = StyleSheet.create({
    safeAView:{
        flex:1,
        backgroundColor: COLORS.secondary,   
    },
    container1:{
        flex:1,
        marginHorizontal:22,
    },
    container2:{
        marginVertical:22,
    },
    text1:{
        fontSize:22,
        fontWeight:"bold",
        marginVertical:12,
        color:COLORS.black
    },
    text2:{
        fontSize:16,
        color:COLORS.black
    },
    container3:{
        marginBottom:12
    },
    container4:{
        width:"100%",
        height:48,
        borderColor:COLORS.black,
        borderWidth:1,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        paddingLeft:22,
    },
    text3:{
        fontSize:16,
        fontWeight:'bold',
        marginVertical:8,
    },
    submitButton: {
        width: '100%',
        height: 48,
        backgroundColor: COLORS.primary,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
      },
      submitButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.white,
      },

})