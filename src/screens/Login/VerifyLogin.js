import React, {useState} from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Input, Button } from '../../components';
import styles from './styles';

const DEFAULT = require('../../assets/login.jpg')
export default function VerifyLogin({navigation,route}){
    const ALERT='Required';
    const [contact, setContact] =useState(null);
    const [lastname, setlastname] =useState(null);
    const [surname, setsurname] =useState(null);
    const [alert, setAlert] = useState(null)

    const clear = ()=>{
        setContact(null);
        setlastname(null);
        setsurname(null);
        setAlert(null)
    }
    const sendCodePhone = () =>{
        if(contact==null||contact.length!=10){
            setAlert('Please check phone number again!')
        }else{
            navigation.navigate('VerifyCode',{screen:route.params?.screen})
        }
        // navigation.navigate('VerifyCode',{screen:route.params?.screen})
    }
    const sendCodeEmail = () =>{
        if(contact){
            navigation.navigate('VerifyCode',{screen:route.params?.screen})
        }else{
            setAlert('Please check email again!')
        }
    }
    return(
        <SafeAreaView style={styles.container}>
            <Icon name='chevron-back' size={22} onPress={()=>navigation.goBack()}/>
            {/* <View style = {styles.logo}/> */}
            <Image source={DEFAULT} style = {styles.logo} resizeMode='contain'/>
            <Text style = {styles.note}>&#9733;{route?.params.screen=='phone'?' Input your phone number and click send code and type code in verify code input tab!':
                'Input your e-mail and click send code and type code in verify code input tab!'}
            </Text>
            <Input 
                alert ={alert}
                value={contact}
                type = {route?.params.screen}
                onChangeText = {(text)=>setContact(text)}
                placeholder={route?.params.screen=='phone'?'Phone number':'E-mail'}
                keyboardType = {route?.params.screen=='phone'?'numeric':'default'}
            />
            <Text style = {styles.clear}onPress={clear}>Clear Form</Text>
            <View style={styles.buttonContainer}>
                <Button title={'send code'.toUpperCase()}
                    onPress={route?.params.screen=='phone'?sendCodePhone:sendCodeEmail}
                    backgroundColor = '#7777fb'
                />   
                {route?.params.screen=='phone'?
                <Button onPress = {()=>navigation.navigate('VerifyLogin',{screen:'e-mail'})}  title ='LOGIN WITH GMAIL'
                    backgroundColor = '#ff7373'
                 />:
                 <Button onPress = {()=>navigation.navigate('VerifyLogin',{screen:'phone'})} 
                    title ='LOGIN WITH PHONE NUMBER'
                />
                }    
            </View>
        </SafeAreaView>
    )
}