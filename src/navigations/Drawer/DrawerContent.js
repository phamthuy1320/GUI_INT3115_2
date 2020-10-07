import React from 'react';
import {
    View,
    Text,
    TouchableOpacity, 
    StyleSheet, 
    Dimensions} from 'react-native';
import {logout} from '../../utils'

const HEIGHT = Dimensions.get('window').height;
const Button = (props) =>{
    return(
        <TouchableOpacity {...props}>
            <Text >{props?.title||'element'}</Text>
        </TouchableOpacity>
    )
}
export default function DrawerContent(){
    return(
        <View style={styles.container}>
            <View style={styles.header}/>
            <Button title='Log Out' onPress={logout}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{

    },
    header:{
        height:HEIGHT/5,
        borderBottomWidth:1,
        backgroundColor:'#ee10d9'
    }
})