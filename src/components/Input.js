import React, {useState, useEffect} from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './styles';

export default function Input(props){
    const [alert, setAlert] = useState(null);
    useEffect(
        ()=>{
            props?.value===''?setAlert(props?.alert):
            props?.type=='phone'&&JSON.stringify(props?.value).length!=12?setAlert(props?.alert):
            props?.type=='code'?setAlert(props?.alert):
            setAlert(null)
            
        }
    )
    return(
        <View style={styles.container}>
            <Text style = {styles.title}>{props?.title}</Text>
            <View style = {styles.inputContainer}>
                <TextInput
                    {...props}
                    styles = {styles.input}
                    value = {props?.value}
                />
            </View>
            <Text style={styles.alert}>{alert}</Text>
        </View>
    )
}