import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export default function Button(props){
    return(
        <TouchableOpacity style = {[styles.buttonContainer,{backgroundColor:props?.backgroundColor||'#7fe5f0'}]}
            {...props}
        >
            <Text style = {styles.button}>{props?.title||'BUTTON'}</Text>
        </TouchableOpacity>
    )
}