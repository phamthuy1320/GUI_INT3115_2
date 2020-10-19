import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './styles';
import {Header,Button} from '../../components';
import {useDispatch} from 'react-redux';
import {removeToken} from '../../redux/actions';

// const DEFAULT = 'https://i.redd.it/mu7gj37pyne41.png';
const DEFAULT  = 'https://w7.pngwing.com/pngs/312/125/png-transparent-natsumes-book-of-friends-tencent-qq-avatar-yu014dkai-baidu-tieba-music-cat-comics-white-mammal.png'
const InforItem = (props) =>{
    const iStyle = StyleSheet.create({
        container:{
            flexDirection:'row',
            justifyContent:'space-between',
            padding:10
        },
        title:{
            color:'#000'
        },
        value:{
            color:'#c1b8b1'
        }
    })
    return(
        <View style = {iStyle.container}>
            <Text style = {iStyle.title}>{props?.title||'Name'}</Text>
            <TouchableOpacity style={{flexDirection:'row'}}>
                <Text style = {iStyle.value}>{props?.value||'Default'}</Text>
                <Icon name = 'chevron-small-right' size = {18} color='#c1b8b1'/>
            </TouchableOpacity>
        </View>
    )
}
export default function SettingScreen({navigation}){
    const dispatch = useDispatch();
    return(
        <View style={styles.container}>
            <Header backgroundColor='#ffc3a0'
                left={<Icon name='menu' size={22} color='#fff' onPress ={()=>navigation.openDrawer()}/>}
                right={<Text style={styles.activeButton}>Done</Text>}
                title='My Profile'
                color='#fff'
            />
            <View style={styles.avatarContainer}>
                <Image source={{uri:DEFAULT}} style={styles.avatarImage}/>
            </View>
            <View style = {{flex:1}}>
                <Text style = {{color:'#ff00ff', margin:10, fontSize:18}}>Basic Information</Text>
                <InforItem title = {'Name'} value = {'Phạm Thị Thúy'}/>
                <InforItem title = {'Location'} value = {'144 Xuân Thủy'}/>
                <InforItem title = {'Phone Number'} value = {'0371234567'}/>
                <InforItem title = {'Email'} value = {'phamthuy@gmail.com'}/>
            </View>
            <View style = {{flex:1}}>
                <Text style = {{color:'#ff00ff', margin:10, fontSize:18}}>Other Information</Text>
                <InforItem title = {'Order Histories'} value=' '/>
            </View>
            <View style={{marginHorizontal:10}}>
                <Button title = {'Logout'.toUpperCase()}
                    onPress = {()=>dispatch(removeToken())}
                />
            </View>
            
        </View>
    )
}