import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainStack from '../MainStack';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator()

export default function DrawerStack(){
    return(
        <Drawer.Navigator drawerContent={DrawerContent}>
            <Drawer.Screen name = 'Main' component = {MainStack}/>
        </Drawer.Navigator>
    )
}
