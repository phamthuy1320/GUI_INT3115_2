import React, {useState, useCallback} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import {Input, Button} from '../../components';
import {setToken} from '../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';

const BRAND = 'NiceFood'
const DEFAULT = require('../../assets/brand.png')

export default function Login ({navigation}){
    // const [user, setUser] = useState(null);
    // const [password, setPassword] = useState(null);

    // const clear = ()=>{
    //     setUser(null);
    //     setPassword(null)
    // // }
    // const store = useSelector(state=>state);
    // const token = store.reducer;
    const dispatch=useDispatch();
    return (
        <View style = {styles.container}>
            <View style = {styles.headerContainer}>
                {/* <Text style = {styles.header}>LOGIN</Text> */}
                {/* <View style = {styles.logo}/> */}
                <Image source={DEFAULT} style = {styles.logo}/>
                <Text style  ={styles.brand}>{BRAND}</Text>
            </View>
            {/* <View style = {styles.inputContainer}>
                <Input title = 'User name' alert='Required' value = {user} onChangeText = {text=>setUser(text)}/>
                <Input title = 'Password' alert='Required' value = {password} onChangeText = {text=>setPassword(text)}/>
            </View> */}
            <View style = {styles.buttonContainer}>
                {/* <Text onPress = {clear} style = {styles.clear}>Clear</Text> */}
                {/* <Button onPress = {()=>dispatch(setToken('hgks'))}  */}
                {/* <Text onPress = {()=>navigation.navigate('Sign',{screen:'jk'})}>Sign</Text> */}
                <Button onPress = {()=>navigation.navigate('VerifyLogin',{screen:'phone'})} 
                    title ='LOGIN WITH PHONE NUMBER'
                />
                <Button onPress = {()=>navigation.navigate('VerifyLogin',{screen:'e-mail'})}  title ='LOGIN WITH GMAIL'
                    backgroundColor = '#ff7373'
                />
            </View>
        </View>
    )
}