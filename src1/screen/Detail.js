import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { useDispatch } from 'react-redux';
import { auth, logOut } from '../config/firebase/firebase';

export default function Detail({navigation, route}) {
    const {user} = route.params

    const dispatch = useDispatch();

    useEffect(() => {
        auth().onAuthStateChanged(user => {
            dispatch({ type: 'user', payload: user })
        })
    }, []);
    return (
        <View>
            <Text>home</Text>
            <Button title='back' onPress={()=> navigation.goBack()} />
            <Button title='logout' onPress={logOut} />
        </View>
    )
}

  