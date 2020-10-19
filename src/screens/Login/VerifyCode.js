import React,{useState} from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import {Input,Button} from '../../components';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {setToken} from '../../redux/actions';

const DEFAULT_CODE = '1234';
const DEFAULT = require('../../assets/code.jpg')
export default function VerifyCode({navigation, route}){
    const dispatch = useDispatch();
    const contact = route.params?.screen=='phone'?'SMS':'E-mail'
    const [code, setCode] = useState(null)
    const [alert, setAlert] = useState(null)
    
    const clear = ()=>{
        setCode(null);
        setAlert(null)
    }
    const checkCode = ()=>{
        if(code==DEFAULT_CODE){dispatch(setToken('hjdhg'))}
        else{
            setAlert('Please sure this is code, you sent')
        }
    }
    return(
        <View style={styles.container}>
            <Icon name='chevron-back' size={22} onPress={()=>navigation.goBack()}/>
            {/* <Input placeholder='Verify code'/> */}
            {/* <View style = {styles.logo}/> */}
            <Image source={DEFAULT} style = {styles.logo} resizeMode='contain'/>
            <Text style = {styles.note}>&#9733;Check your {contact} and enter under empty field!</Text>
            {/* <View style = {{flexDirection:'row', justifyContent:'space-around'}}> */}
            <Input 
                maxLength={4}
                autoFocus
                placeholder = 'Verify Code'
                keyboardType='numeric'
                value={code}
                onChangeText = {(text)=> setCode(text)}
                alert={alert}
                type='code'

            />
            <View style={styles.buttonContainer}>
                <Button title={'check'.toUpperCase()}
                    onPress={checkCode}
                />
                <Text style = {styles.cancel}
                    onPress = {()=>navigation.popToTop()}
                >Cancel</Text>       
            </View>
        </View>
    )
}