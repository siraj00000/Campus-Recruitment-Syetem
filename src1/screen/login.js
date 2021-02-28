import React, { useEffect, useState } from 'react'
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icon5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useDispatch } from 'react-redux'
import { auth, login } from '../config/firebase/firebase'


export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        auth().onAuthStateChanged(user => {
            dispatch({ type: 'user', payload: user })
        })
    }, []);

    const Login = () => {
        login(email, password)
            .then(() => {
                navigation.navigate('home')
            })
            .catch(error => setMessage(error.message));

        setEmail('')
        setPassword('')
    }

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <View style={styles.greeting}>
                    <Image source={require('../assests/logo.png')}
                        style={styles.logo}
                    />
                </View>
                <View style={styles.signInContainer}>
                    <View style={styles.email_password}>
                        <MaterialCommunityIcons
                            name='email'
                            style={{ marginHorizontal: 10 }}
                            size={22}
                            color='#0351ff'
                        />
                        <TextInput
                            placeholder='Email'
                            keyboardType='email-address'
                            value={email}
                            onChangeText={(e) => setEmail(e)}
                        />
                    </View>
                    <View style={styles.email_password}>
                        <Icon5
                            name='lock'
                            style={{ marginHorizontal: 10 }}
                            size={22}
                            color='#0351ff'
                        />
                        <TextInput
                            placeholder='Password'
                            secureTextEntry={true}
                            value={password}
                            onChangeText={(e) => setPassword(e)}
                        />
                    </View>
                </View>
                <View style={styles.message}><Text style={styles.msgText}>{message}</Text></View>
                <View style={styles.loginContainer}>
                    <TouchableOpacity
                        style={styles.login}
                        onPress={Login}
                    >
                        <Text style={styles.btnText}>Login</Text>
                    </TouchableOpacity>

                    <View style={styles.confirm} >
                        <Text>Do you have account?</Text>
                        <Text onPress={() => navigation.navigate('register')}> Sign In</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 10,
        flex: 1,
    },
    container: {
        padding: 20,
        justifyContent: 'center',
        flex: 1,
    },
    greeting: {
        paddingVertical: 30
    },
    email_password: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#f4f7ff'

    },
    greetMessage: {
        fontSize: 48,
        textAlign: 'left',
        fontWeight: 'bold',
        color: '#0e1d74',
    },
    loginContainer: {
        flex: 1,
        marginTop: 20,
    },
    login: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginVertical: 10,
        shadowColor: "#f4f7ff",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.20,
        shadowRadius: 3.84,
        elevation: 3,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    btnText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0e1d74'
    },
    confirm: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    message: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    },
    msgText: {
        fontSize: 10,
        color: 'red',
        textAlign: 'center'
    }


})
