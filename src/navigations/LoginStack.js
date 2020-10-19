import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import VerifyCode from '../screens/Login/VerifyCode';
import VerifyLogin from '../screens/Login/VerifyLogin';
import Signup from '../screens/Login/Signup';

const Stack = createStackNavigator();

export default function LoginStack(){
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='LoginScreen' component={Login}/>
            <Stack.Screen name='Sign' component={Signup}/>
            <Stack.Screen name='VerifyLogin' component={VerifyLogin}/>
            <Stack.Screen name='VerifyCode' component={VerifyCode}/>
        </Stack.Navigator>
    )
}
