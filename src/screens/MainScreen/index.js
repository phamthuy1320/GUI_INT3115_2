import { range } from 'lodash';
import React from 'react';
import {View, Text, StyleSheet, Dimensions, FlatList,TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {Header} from '../../components';
import styles from './styles';

const FAKE_LENGTH=5;
const IMG_HEIGHT = 200;
const IMG_WIDTH = Dimensions.get('window').width-20;
const iStyles = StyleSheet.create({
    itemContainer:{

    },
    imgRestautant:{
        backgroundColor:'#a4cf9a',
        height:IMG_HEIGHT,
        width:IMG_WIDTH
    },
    name:{
        fontSize:16
    },
    address:{

    }
})
const fakeArray = () =>{
    let array=[]
    for (const i in range(FAKE_LENGTH)) {
        array.push({"name":"Restaurant "+i, "address":"Address "+i})
      }
    return array
}

const ItemRestaurant = (props) =>{
    const navigation=useNavigation()
    return(
    <View style = {iStyles.itemContainer}>
        <TouchableOpacity style = {iStyles.imgRestautant} onPress={()=>navigation.navigate('Detail')}/>
        <Text style = {iStyles.name}>{props?.name}</Text>
        <Text style = {iStyles.address}>{props?.address}</Text>
    </View>)
}

const ListRestaurant = (props) =>{
    console.log('list', fakeArray())
    return(
        <FlatList
            data = {props.data}
            renderItem= {({item})=>
                <ItemRestaurant name={item.name} address={item.address}/>
            }
            keyExtractor={(item, idx)=>idx.toString()}
        />
    )
}
export default function Main({navigation}){
    
    return (
        <>
        <Header 
            left = {<Entypo name = 'menu' size={22} onPress={()=>navigation.openDrawer()}/>}
            right = {<Entypo name = 'dots-three-vertical' size={22}/>}
            title = 'Restaurant'
        />
        <View style={styles.container}>
            <ListRestaurant data={fakeArray()}/>
        </View>
        </>
    )
}