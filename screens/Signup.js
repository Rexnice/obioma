import { StyleSheet, Text, View, TextInput} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import COLORS from '../constants/colors'
const Signup = () => {
  return (
    <SafeAreaView style={styles.safeAView}>
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
        </View>
        <View>
            
        </View>
    
    </SafeAreaView>
  )
}

export default Signup

const styles = StyleSheet.create({
    safeAView:{
        flex:1,
        backgroundColor: COLORS.primary
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
    }

})