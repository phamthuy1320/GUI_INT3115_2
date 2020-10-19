import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux'
import Login from '../screens/Login';
import Main from '../screens/MainScreen';
import DrawerStack from './Drawer';
import {setToken} from '../redux/actions';
import ChatScreen from '../screens/ChatScreen'
import DishScreen from '../screens/DishScreen';
import LoginStack from './LoginStack';
const Stack = createStackNavigator();

const AppNavigation = () =>{
    const store = useSelector(state=>state);
    // const dispatch = useDispatch();
    const token = store.reducer;
    console.log('token', token); 
    // dispatch(setToken('user'))
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
            {/* <Stack.Screen name = 'Drawer' component = {DrawerStack}/> */}
                {token!==null?
                <Stack.Screen name= 'Login' component={LoginStack}/>:
                <Stack.Screen name = 'Drawer' component = {DrawerStack}/>
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;