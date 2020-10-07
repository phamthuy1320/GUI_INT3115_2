import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Main from '../screens/MainScreen';
import RestaurantDetail from '../screens/RestaurantDetail';

const Stack=createStackNavigator();

export default function MainStack(){
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Main' component={Main}/>
            <Stack.Screen name='Detail' component={RestaurantDetail}/>
        </Stack.Navigator>
    )
}