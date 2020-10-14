import React from 'react';
import {
    View,
    Text,
    TouchableOpacity, 
    StyleSheet, 
    Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
const HEIGHT = Dimensions.get('window').height;
const Button = (props) =>{
    return(
        <TouchableOpacity {...props} style = {styles.buttonStyle}>
            {props?.element}
            <View style = {{marginRight:20}}/>
            <Text>{props?.title||'element'}</Text>
        </TouchableOpacity>
    )
}
export default function DrawerContent({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style = {styles.avatar}/>
                <Text style = {styles.name}>User name</Text>
            </View>
            <Button 
                title='Restaurant' 
                onPress = {()=>navigation.navigate('Main')}
                element = {<Icon name = 'logout' size = {22}/> }
            />
            <Button 
                title='Categories' 
                onPress = {()=>navigation.navigate('Cate')}
                element = {<Icon name = 'logout' size = {22}/> }
            />
            <Button 
                title='Dish' 
                onPress = {()=>navigation.navigate('Dish')}
                element = {<Icon name = 'logout' size = {22}/> }
            />
            {/* <Button 
                title='Chat' 
                onPress = {()=>navigation.navigate('Chat')}
                element = {<Icon name = 'logout' size = {22}/> }
            /> */}
            <Button 
                title='Log out' 
                onPress = {()=>navigation.navigate('Logout')}
                element = {<Icon name = 'logout' size = {22}/> }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{

    },
    header:{
        height:HEIGHT/5,
        backgroundColor:'#ebbfff',
        justifyContent:'center',
    },
    avatar:{
        height:100,
        aspectRatio:1/1,
        backgroundColor:'#05a167',
        borderRadius:90,
        borderWidth:5,
        borderColor:'#fff',
        marginBottom:20,
        marginHorizontal:10
    },
    name:{
        fontSize:16, 
        marginHorizontal:10,
        color:'#b8b3b3'
    },
    buttonStyle:{
        flexDirection:'row',
        margin:10,
    }
})