import React from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {removeToken} from '../../redux/actions';

export default function Logout(){
    const dispatch = useDispatch()
    dispatch(removeToken())
    return(<View/>)
}