import React, { useEffect } from 'react'
import { Dimensions, StyleSheet, Text, View, Animated } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5'
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

export default function Home(props) {
    return (
        <View style={styles.wrapper}>
            {/* <Animated.FlatList /> */}
            <TouchableOpacity style={styles.create}>
                <Icon style={StyleSheet.profile} 
                    name='plus-circle' size={50} onPress={()=> props.navigation.navigate('proposal')}/>
                <Text style={styles.subTitle}>Create Proposal</Text>   
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    create: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: HEIGHT - 80,
        left: WIDTH - 80,
        right: 0,
        bottom: 0,
        zIndex: 1
    },
    subTitle: {
        textAlign: 'center',
        fontSize: 10
    }
    // profile: {


    // }
})