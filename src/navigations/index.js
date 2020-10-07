import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux'
import Login from '../screens/Login';
import Main from '../screens/MainScreen';
import Drawer from './Drawer';
import {setToken} from '../redux/actions';

const Stack = createStackNavigator();

const AppNavigation = () =>{
    const store = useSelector(state=>state);
    // const dispatch = useDispatch();
    const token = store.reducer;
    // console.log('token', token); 
    // dispatch(setToken('user'))

    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                {token===null?
                <Stack.Screen name= 'Login' component={Login}/>:
                // <Stack.Screen name= 'Main' component = {Main}/>
                <Stack.Screen name = 'Drawer' component = {Drawer}/>
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;