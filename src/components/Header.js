import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export default function Header(props){
    return(
        <View style={styles.headerContainer}>
            {props?.left}
            <Text style = {styles.titleHeader}>{props?.title||'header'}</Text>
            {props?.right}
        </View>
    )
}