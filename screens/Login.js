import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.safeAView}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container1}>
          <View style={styles.container2}>
            <Text style={styles.text1}>
              LOGIN
            </Text>
            <Text style={styles.text2}>
              Check out for Amazing designers
            </Text>
          </View>
          <View>
            <View>
              <Text style={{color:COLORS.white}}>
                Email
              </Text>
              <TextInput
              placeholder="Enter your email"
              placeholderTextColor={COLORS.black}
              style={{width:'100%'}}>
              </TextInput>
            </View>
            <View>
              <Text style={{color:COLORS.white}}>
                Password
              </Text>
              <TextInput
              placeholder="Enter your password"
              placeholderTextColor={COLORS.black}
              secureTextEntry={true}
              style={{width:'50%'}}>
              </TextInput>
            </View>
            <Pressable
              onPress ={()=>navigation.navigate("HomePageScreen")}
              style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}


export default Login

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



