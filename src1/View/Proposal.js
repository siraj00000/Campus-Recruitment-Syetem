import React from 'react'
import { Text, View } from 'react-native'
import Icon5 from 'react-native-vector-icons/FontAwesome5'


export default function Proposal(props) {
    return (
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
    )
}
