import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        marginBottom:10
    },  
    inputContainer:{
        borderBottomWidth:1,
    },  
    input:{
        color:'#f6eeee'
    },
    alert:{
        color:'#ff4040'
    },
    title:{
        color:'#000'
    },
    buttonContainer:{
        backgroundColor:'#7fe5f0',
        borderRadius:25,
        padding:10,
        marginBottom:10
    },
    button:{
        color:'#fff',
        textAlign:'center',
    },
    headerContainer:{
        justifyContent:'space-between',
        flexDirection:'row',
        paddingVertical:20,
        paddingHorizontal:10,
        backgroundColor:'#fff',
        borderBottomColor:'#cacbd3',
        borderBottomWidth:1,

    },
    titleHeader:{
        textTransform: 'uppercase',
        textAlign:'center' 
    }

});

export default styles;