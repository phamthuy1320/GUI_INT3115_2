import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
// import Signup from '../screens/Signup';
// import MainScreen from '../screens/MainScreen';

const Stack = createStackNavigator();

const AppNavigation = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name= 'Login' component={Login}/>
                {/* <Stack.Screen name= 'SignUp' component= {Signup}/> */}
                {/* <Stack.Screen name= 'Main' conponent = {MainScreen}/> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;