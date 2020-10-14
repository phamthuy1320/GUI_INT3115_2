import React,{useState} from 'react';
import {View, Text, TouchableOpacity,ScrollView,Animated,Dimensions,StyleSheet} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import styles from './styles';
import {Header,Button} from '../../components';
const HEIGHT = Dimensions.get('screen').height
const DISH_IMAGE_HEIGHT = HEIGHT/2-50;
const AmountButton = (props)=>{
    const iStyle=StyleSheet.create({
        container:{
            height:40,
            width:'30%',
            flexDirection:'row',
            backgroundColor:'#ee4444',
            elevation:2,
            borderRadius:10,
            justifyContent:'space-around',
        },
        button:{
            height:35,
            aspectRatio:1/1,
            elevation:3,
            borderRadius:5,
            alignSelf:'center',
            alignItems:'center',
            justifyContent:'space-around'
        }
    })
    return(
       <View style={iStyle.container}>
           <TouchableOpacity style={iStyle.button}>
               <Text style={{color:'#fff', fontSize:18}}>-</Text>
           </TouchableOpacity>
           <Text style={{color:'#fff', fontSize:18,alignSelf:'center'}}>{props?.currentAmount||'1'}</Text>
           <TouchableOpacity style={iStyle.button}>
               <Text style={{color:'#fff', fontSize:18}}>+</Text>
           </TouchableOpacity>
       </View>
    )
}
const MyCheckBox = (props) =>{
    const [check,setCheck] = useState(false);
    return(
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={()=>setCheck(!check)} style={{marginRight:10}}>
                <MaterialIcons name={check?'check-circle':'radio-button-unchecked'} size={25} color={check?'orange':'#000'}/>
            </TouchableOpacity>
            <Text style={props?.title.toUpperCase()=='LARGE'?{marginRight:50}:null}>{props?.title}</Text>
        </View>
    )
}
export default function DishDetail({navigation}){
    const [scrollY, setScrollY] = useState(new Animated.Value(0))
    const heightImage = scrollY.interpolate({
        inputRange:[0,DISH_IMAGE_HEIGHT],
        outputRange:[DISH_IMAGE_HEIGHT,DISH_IMAGE_HEIGHT/2],
    }
    )
    const heightIcon = scrollY.interpolate({
        inputRange:[0,DISH_IMAGE_HEIGHT-25],
        outputRange:[DISH_IMAGE_HEIGHT-25,DISH_IMAGE_HEIGHT/2-25],
    })
    const heightContent = scrollY.interpolate({
        inputRange:[0,HEIGHT-DISH_IMAGE_HEIGHT],
        outputRange:[HEIGHT-DISH_IMAGE_HEIGHT,HEIGHT-DISH_IMAGE_HEIGHT/2+25],
    })
    return(
        <View style = {styles.container}>
            <Header
                left={<Entypo name='menu' size={22} 
                onPress={()=>navigation.openDrawer()}/>}
                right={<View/>}
                title='Dish Description'
            />
            
            <Animated.View
                style={[styles.dishImage,{height:heightImage,zIndex:1}]}
            >
                <Animated.View style={[styles.icons,{left:10,top:heightIcon}]}>
                    <Entypo name='star' size={20}/>
                </Animated.View>
                <Animated.View style={[styles.icons,{right:10,top:heightIcon}]}>
                    <Entypo name='shopping-cart' size={20}/>
                </Animated.View>
            </Animated.View>
            
            <Animated.View style={{height:heightContent,flex:1}}>
            <ScrollView
                onScroll={Animated.event([
                    {nativeEvent:{
                        contentOffset:{
                            y:scrollY
                        }
                    }}
                ],{useNativeDriver:false})}
            >
                <View style={styles.amountDish}>
                    <Text style={styles.dishName}>{'dish name'.toUpperCase()}</Text>
                    <Text style = {styles.price}>$ Price</Text>
                    <AmountButton/>
                </View>
                <View style={styles.vote}>
                    <View style={{flexDirection:'row'}}>
                        <Entypo name='star-outlined' size={22}/>
                        <Entypo name='star-outlined' size={22}/>
                        <Entypo name='star-outlined' size={22}/>
                        <Entypo name='star-outlined' size={22}/>
                        <Entypo name='star-outlined' size={22}/>
                    </View>
                    <Text>How do you feel? Is this delious? How much is vote for this dish? </Text>
                </View>
                <View style={styles.vote}>
                    <Text style={{fontSize:18}}>Size</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <MyCheckBox title='Small'/>
                        <MyCheckBox title='Medium'/>
                        <MyCheckBox title='Large'/>

                    </View>
                </View>
            </ScrollView>
            </Animated.View>
            {/* Icon part */}
            {/* <View style={[styles.icons,{left:10}]}>
                <Entypo name='star' size={20}/>
            </View>
            <View style={[styles.icons,{right:10}]}>
                <Entypo name='shopping-cart' size={20}/>
            </View> */}
            {/* <View style = {[styles.activeStyle,{
                bottom:10,
                left:10,
            }]}>
                <Entypo name = 'message' size={22} color = '#fff'/>
            </View> */}
            <View style = {[styles.activeStyle,{
                bottom:10,
                right:10
            }]}>
                <Entypo name = 'shopping-cart' size = {22} color='#fff'/>
            </View>
        </View>
    )
}