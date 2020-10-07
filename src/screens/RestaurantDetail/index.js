import React from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Header} from '../../components';
import styles from '../MainScreen/styles';

export default function RestaurantDetail({navigation}){
    return(
        <>
        <Header 
            left = {<Ionicons name = 'arrow-back' size={22} onPress={()=>navigation.goBack()}/>}
            title = 'Restaurant'
            right={<View/>}
        />
        <View style={styles.container}>
            <Text>detail</Text>
        </View>
        </>
    )
}