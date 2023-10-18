import React from 'react';
import {Text, View, } from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'
import { Login, Signup, Welcome } from './screens';

const Stack = createNativeStackNavigator()
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='welcome'
            >
                <Stack.Screen
                    name='welcome'
                    component={Welcome}
                    options ={{
                        headerShown:false
                    }}
                />
                <Stack.Screen
                    name='Login'
                    component={Login}
                    options ={{
                        headerShown:false
                    }}
                />
                <Stack.Screen
                    name='Signup'
                    component={Signup}
                    options ={{
                        headerShown:false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
         
    );
}














































































