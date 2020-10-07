import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {Input, Button} from '../../components';
import {setToken} from '../../redux/actions';
import {useDispatch} from 'react-redux';

const BRAND = 'NiceFood'

export default function Login (){
    // const [user, setUser] = useState(null);
    // const [password, setPassword] = useState(null);

    // const clear = ()=>{
    //     setUser(null);
    //     setPassword(null)
    // }

    const dispatch=useDispatch();
    return (
        <View style = {styles.container}>
            <View style = {styles.headerContainer}>
                {/* <Text style = {styles.header}>LOGIN</Text> */}
                <View style = {styles.logo}/>
                <Text style  ={styles.brand}>{BRAND}</Text>
            </View>
            {/* <View style = {styles.inputContainer}>
                <Input title = 'User name' alert='Required' value = {user} onChangeText = {text=>setUser(text)}/>
                <Input title = 'Password' alert='Required' value = {password} onChangeText = {text=>setPassword(text)}/>
            </View> */}
            <View style = {styles.buttonContainer}>
                {/* <Text onPress = {clear} style = {styles.clear}>Clear</Text> */}
                <Button onPress = {dispatch(setToken('jkg'))} 
                    title ='LOGIN WITH PHONE NUMBER'
                />
                <Button onPress = {dispatch(setToken('jkg'))}  title ='LOGIN WITH GMAIL'
                    backgroundColor = '#ff7373'
                />
            </View>
        </View>
    )
}