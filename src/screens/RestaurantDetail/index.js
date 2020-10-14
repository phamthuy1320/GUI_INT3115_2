import React, {useState, useEffect, useCallback} from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useRoute} from '@react-navigation/native';
import {GiftedChat} from 'react-native-gifted-chat';
import {Header} from '../../components';
import styles from './styles';

export default function RestaurantDetail({navigation}){
    const route = useRoute();
    const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello, '+route.params?.name+'. What do you want to do?' ,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])
    return(
        <>
        <Header 
            left = {<Ionicons name = 'arrow-back' size={22} onPress={()=>navigation.goBack()}/>}
            title = {route.params?.name}
            right={<View/>}
        />
        <View style={styles.container}>
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                }}
            />
        </View>
        </>
    )
}