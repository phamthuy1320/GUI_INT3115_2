import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export default function Header(props){
    return(
        <View style={[styles.headerContainer,{backgroundColor:props?.backgroundColor||'#fff'}]}>
            {props?.left}
            <Text style = {[styles.titleHeader,{color:props?.color||'#000'}]}>{props?.title||'header'}</Text>
            {props?.right}
        </View>
    )
}