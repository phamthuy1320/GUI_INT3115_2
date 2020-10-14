import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Animated, ScrollView, Image, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Header} from '../../components';

const HEIGHT_SCREEN = Dimensions.get('screen').height;
const HEADER_MAX_HEIGHT = 120
const HEADER_MIN_HEIGHT = 70
const PROFILE_IMAGE_MAX_HEIGHT = 80
const PROFILE_IMAGE_MIN_HEIGHT = 40

export default function ChatScreen(){
    const [scrollY, setScrollY] = useState(new Animated.Value(0));
    // const [size, setSize] = useState(new Animated.Value(0))
    const headerHeight = scrollY.interpolate({
        inputRange:[0,HEADER_MAX_HEIGHT],
        outputRange:[HEADER_MAX_HEIGHT,HEADER_MIN_HEIGHT],
        extrapolate:'clamp'
    })
    const profileImageHeight = scrollY.interpolate({
        inputRange:[0,PROFILE_IMAGE_MAX_HEIGHT],
        outputRange:[PROFILE_IMAGE_MAX_HEIGHT,PROFILE_IMAGE_MIN_HEIGHT],
        extrapolate:'clamp'
    })
    const profileImageMarginTop = scrollY.interpolate({
        inputRange:[0,HEADER_MAX_HEIGHT],
        outputRange:[HEADER_MAX_HEIGHT-PROFILE_IMAGE_MAX_HEIGHT/2,HEADER_MIN_HEIGHT],
        extrapolate:'clamp'
    })

    return(
        <View style = {styles.container}>
            <View>
                <Animated.View 
                    style = {[styles.animated,{height:headerHeight}]}
                >

                </Animated.View>
            </View>
            <ScrollView style = {styles.content}
                onScroll={Animated.event([
                    {nativeEvent:{
                        contentOffset:{
                            y:scrollY
                        }
                    }}
                ],{useNativeDriver:false})}
            >
                <Animated.View style = {[styles.imageContainer,{height:profileImageHeight,width:profileImageHeight, marginTop:profileImageMarginTop}]}>
                    <View style = {styles.image }/>
                </Animated.View>
                
                <View style ={styles.secondContent}/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    animated:{
        position:'absolute',
        top:0,
        left:0,
        right:0,
        backgroundColor:'#7fe5f0'
    },
    scrollview:{
        flex:1,
    },
    imageContainer:{
        // marginTop:HEADER_MAX_HEIGHT-PROFILE_IMAGE_MAX_HEIGHT/2,
        marginLeft:10,
        // height:PROFILE_IMAGE_MAX_HEIGHT,
        // width:PROFILE_IMAGE_MAX_HEIGHT,
        borderRadius:90,
        backgroundColor:'#ffb400',
        borderWidth:3,
        borderColor:'#fff',
        // overflow:'hidden',
    },
    image:{
    },
    secondContent:{
        height:HEIGHT_SCREEN-HEADER_MIN_HEIGHT
    }
})