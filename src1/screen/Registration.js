import React, { useState } from 'react'
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
// import Icon from 'react-native-vector-icons/FontAwesome'
import Icon5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Register, addUserToDb } from '../config/firebase/firebase';



export default function Registeration({ navigation }) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [designation, setDesignation] = useState('');

    const SignUp = () => {
        if (!email) {
            setMessage('Field email is empty');
            return
        } else if (!name) {
            setMessage('Field name is empty');
            return
        } else if (!password) {
            setMessage('Field password is empty');
            return
        } else if (!phone) {
            setMessage('Field phone is empty');
            return
        } else if (!designation) {
            setMessage('Field designation is empty');
            return
        }

        const avatar = 'https://png.pngtree.com/png-vector/20190704/ourmid/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg'
        const user = { name, phone, email, designation, avatar, roll: 0 }

        Register(email, password).then(res => (
            addUserToDb(user).then(res => {
                navigation.navigate('home', { user })
            }).catch(e => setMessage(e.message))
        )).catch(e => {
            setMessage(e.message)
        })

        setEmail('')
        setName('')
        setPassword('')
        setPhone('')
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
                        <Icon5
                            name='user-alt'
                            style={{ marginHorizontal: 10 }}
                            size={22}
                            color='#0351ff'
                        />
                        <TextInput
                            placeholder='Full name'
                            value={name}
                            onChangeText={(e) => setName(e)}
                        />
                    </View>
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
                    <View style={styles.email_password}>
                        <Icon5
                            name='phone'
                            style={{ marginHorizontal: 10 }}
                            size={22}
                            color='#0351ff'
                        />
                        <TextInput
                            placeholder='Phone number'
                            keyboardType='phone-pad'
                            value={phone}
                            onChangeText={(e) => setPhone(e)}
                        />
                    </View>
                    <View style={styles.email_password}>
                        <Icon5
                            name='dot-circle'
                            style={{ marginHorizontal: 10 }}
                            size={22}
                            color='#0351ff'
                        />
                        <TextInput
                            placeholder='Student or Comapany'
                            value={designation}
                            onChangeText={(e) => setDesignation(e)}
                        />
                    </View>
                </View>
                <View style={styles.message}><Text style={styles.msgText}>{message}</Text></View>
                <View style={styles.loginContainer}>
                    <TouchableOpacity
                        style={styles.login}
                        onPress={SignUp}
                    >
                        <Text style={styles.btnText}>Register</Text>
                    </TouchableOpacity>

                    <View style={styles.confirm} >
                        <Text>Already have an account?</Text>
                        <Text onPress={() => navigation.navigate('login')}> Login In</Text>
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
