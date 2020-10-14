import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainStack from '../MainStack';
import DrawerContent from './DrawerContent';
import Logout from '../../screens/Login/Logout';
import ChatScreen from '../../screens/ChatScreen';
import DishStack from '../DishStack';
import Categories from '../../screens/Categories';

const Drawer = createDrawerNavigator()

export default function DrawerStack(){
    return(
        <Drawer.Navigator drawerContent={DrawerContent}>
            <Drawer.Screen name = 'Main' component = {MainStack}/>
            <Drawer.Screen name = 'Logout' component = {Logout}/>
            <Drawer.Screen name = 'Dish' component = {DishStack}/>
            <Drawer.Screen name = 'Chat' component = {ChatScreen}/>
            <Drawer.Screen name = 'Cate' component = {Categories}/>
        </Drawer.Navigator>
    )
}
