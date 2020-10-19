import React,{useState} from 'react';
import {View, Text, FlatList, Image,TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Header} from '../../components';
import styles from './styles';
import { random,range } from 'lodash';

const DISH_IMAGE_HEIGHT = 200
const DISH_PRICE_HEIGHT = DISH_IMAGE_HEIGHT/3.5
const LENGTH = 5
const DEFAULT = 'https://images.immediate.co.uk/production/volatile/sites/2/2018/10/OLI-1018_Everyday-PanFriedCodWithGiantBeanChard_28546-acc2f54.jpg?quality=90&crop=20px%2C3414px%2C5444px%2C2342px&resize=960%2C408'
const iStyle = {
    container:{
        height:DISH_IMAGE_HEIGHT,
        backgroundColor:'#fff8b7',
        justifyContent:'flex-end',
    },
    description:{
        height:DISH_PRICE_HEIGHT,
        backgroundColor:'#000',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:10,
        position:'absolute',
        width:'100%',
        opacity: 0.5,
    },
    icons:{
        flexDirection:'row',
        blurRadius:5
    },
    dishContainer:{
        blurRadius:3
    },
    dishName:{
        color:'#fff',
        fontSize:20
    },
    price:{
        color:'#fff'
    },
}
const Array = () =>{
    let array=[]
    for (const i in range(LENGTH)) {
        array.push({"name":"dish "+i, "price":"$ "+i})
        }
    return array
}
const ItemDish = (props) =>{
    const navigation = useNavigation();
    const [like, setLike] = useState(false);
    return (
        <TouchableOpacity style = {iStyle.container}
            onPress = {()=>navigation.navigate('DishDetail')}
        >
            <Image 
                style = {{flex:1}}
                source = {{uri:props?.uri||DEFAULT}}
            />
            <View style = {iStyle.description}>
                <View style = {iStyle.dishContainer}>
                    <Text style = {iStyle.dishName}>{props?.name.toUpperCase()}</Text>
                    <Text style = {iStyle.price}>{props?.price}</Text>
                </View>
                <View style = {iStyle.icons}>
                    <AntDesign 
                        name = {like?'heart':'hearto'}
                        size = {22} color = '#fff'
                        onPress = {()=>setLike(!like)}
                    />
                    <View style = {{marginHorizontal:10}}/>
                    <Entypo name = 'shopping-cart' size = {22} color='#fff'/>
                </View>
            </View>
        </TouchableOpacity>
    )
}
export default function DishScreen({navigation}){
    return(
        <View style = {styles.container}>
            <Header
                // left = {<Entypo name = 'menu' size={22} onPress = {()=>navigation.openDrawer()}/>}
                left={<Ionicons name='arrow-back' size={22} 
                    onPress={()=>navigation.goBack()}/>}
                right = {<Entypo name = 'dots-three-vertical' size={22}/>}
                title = 'DISH'
            />
            <FlatList
                data = {Array()}
                renderItem = {({item})=>
                    <ItemDish name = {item.name} price = {item.price}/>}
                keyExtractor={(item,idx)=>idx.toString()}
            />
            {/* active button */}
            <View style = {[styles.activeStyle,{
                bottom:10,
                left:10,
            }]}>
                <Entypo name = 'message' size={22} color = '#fff'/>
            </View>
            <View style = {[styles.activeStyle,{
                bottom:10,
                right:10
            }]}>
                <Entypo name = 'shopping-cart' size = {22} color='#fff'/>
            </View>
        </View>
    )
}