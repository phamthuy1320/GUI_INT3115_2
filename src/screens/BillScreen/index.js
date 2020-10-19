import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {Header} from '../../components';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function BillScreen(){
    return(
        <View style={styles.container}>
            <Header title='My bill'
                left={<Ionicons name='arrow-back' size={22}/>}
                right={<View/>}
            />
        </View>
    )
}