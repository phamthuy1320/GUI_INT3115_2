import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';

export default function Input(props){
    return(
        <View style={styles.container}>
            <TextInput
                {...props}
                styles = {styles.input}
            />
        </View>
    )
}