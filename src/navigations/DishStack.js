import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DishScreen from '../screens/DishScreen';
import DishDetail from '../screens/DishDetail';

const Stack = createStackNavigator();

export default function DishStack(){
    return(
        <Stack.Navigator screenOptions = {{headerShown:false}}>
            <Stack.Screen name = 'DishScreen' component = {DishScreen}/>
            <Stack.Screen name = 'DishDetail' component = {DishDetail}/>
        </Stack.Navigator>
    )
}