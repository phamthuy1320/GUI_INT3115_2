import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Input, Button } from '../../components';
import styles from './styles';

export default function Signup({navigation,route}){
    const ALERT='Required';
    const [contact, setContact] =useState(null);
    const [lastname, setlastname] =useState(null);
    const [surname, setsurname] =useState(null);
    const [location, setLocation] =useState(null);

    const clear = ()=>{
        setContact(null);
        setlastname(null);
        setsurname(null);
    }
    return(
        <View style={styles.container}>
            <Icon name='chevron-back' size={22} onPress={()=>navigation.goBack()}/>
            <Text style = {{color:'#62cfde',fontSize:20}}>Sign Up</Text>
            <Text style = {{color:'#62cfde'}}>&#9733;{route?.params.screen=='phone'?' Input your phone number and click send code and type code in verify code input tab!':
                'Input your e-mail and click send code and type code in verify code field!'}</Text>
            <Text style = {{color:'#62cfde'}}>&#9733;You can change information whenever!</Text>
            
            <View style = {{flex:1}}>
                <Input 
                    alert ={ALERT}
                    value={contact}
                    onChangeText = {(text)=>setContact(text)}
                    placeholder={route?.params.screen=='phone'?'Phone number':'E-mail'}/>
                <Input placeholder='Last name' alert={ALERT}
                    value={lastname}
                    onChangeText = {(text)=>setlastname(text)}
                />
                <Input placeholder='Surname' alert = {ALERT}
                    value={surname}
                    onChangeText = {(text)=>setsurname(text)}
                />
                <Input placeholder='Location' alert = {ALERT}
                    value={location}
                    onChangeText = {(text)=>location(text)}
                />
                <Text style = {styles.clear}
                    onPress={clear}
                >Clear Form</Text>
            </View> 
            <View style={styles.buttonContainer}>
                <Button title={'send code'.toUpperCase()}
                    onPress={()=>navigation.navigate('VerifyCode')}
                />       
            </View>
        </View>
    )
}