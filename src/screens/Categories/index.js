import React from 'react';
import {View, Text, StyleSheet, FlatList,TouchableOpacity} from 'react-native';
import styles from './styles';
import {Header} from '../../components';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const LENGTH =11
const ItemCate = (props) =>{
    const iStyle = StyleSheet.create({
        container:{
            backgroundColor:'#eeadf6',
            height:100,
            justifyContent:'center',
            alignItems:'center',
            margin:5,
            flex:1
        },
        name:{
            textAlign:'center',
            fontSize:30,
            color:'#fff'
        }
    }) 
    const navigation = useNavigation()
    return(
        <TouchableOpacity style={iStyle.container}
            onPress = {()=>navigation.navigate('Dish')}
        >
            <Text style={iStyle.name}>{props?.name.toUpperCase()||'cate'.toUpperCase()}</Text>
        </TouchableOpacity>
    )
}
const Array = () =>{
    let array =[]
    for (let i = 0; i < LENGTH; i++) {
        array.push({'name':i})
    }
    return array;
}

const CateList = (props) =>{
    return(
        <FlatList
            data={props.data}
            renderItem={({item})=>
            <ItemCate name={'cate '+item.name}/>
            }
            numColumns={2}
            keyExtractor={(item,idx)=>idx.toString()}
        />
    )
}
export default function Categories({navigation}){
    return(
        <View style={styles.container}>
            <Header
                left={<Entypo name='menu' size={22}
                    onPress={()=>navigation.openDrawer()}
                />}
                right={
                    <View style={{flexDirection:'row'}}>
                        <Ionicons name='search' size={22}/>
                        <Entypo name = 'dots-three-vertical' size={22}/>
                    </View>
                }
                title='Categories'
            />
            <View style = {{padding:5, flex:1}}>
                <CateList
                    data={Array()}
                />
            </View>
            {/* Active button */}
            {/* <View style = {[styles.activeStyle,{
                bottom:10,
                left:10,
            }]}>
                <Entypo name = 'message' size={22} color = '#fff'/>
            </View> */}
            <TouchableOpacity style = {[styles.activeStyle,{
                bottom:10,
                right:10
            }]}
                
            >
                <Entypo name = 'shopping-cart' size = {22} color='#fff'/>
            </TouchableOpacity>
        </View>
    )
}