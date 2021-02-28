import React from 'react'
import { Button, Text, View, Image, StyleSheet } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';

export default function Onboardingscreen({ navigation }) {
    const car = 'https://www.google.com/search?q=car+images&sxsrf=ALeKk00An3Rf3a_30ADc-iSQiASKliVNhg:1614496376865&tbm=isch&source=iu&ictx=1&fir=nlB4LcznpUaO3M%252CpexCxKQSr2TtXM%252C_&vet=1&usg=AI4_-kTgOhRNLNt5JXIqlaXXiL9ywMeMcA&sa=X&ved=2ahUKEwigx6LYg4zvAhWIYcAKHcjnB5kQ9QF6BAgQEAE#imgrc=nlB4LcznpUaO3M'

    return (
        // <View><Text>hi</Text></View>
        <Onboarding
            onSkip={()=> navigation.replace('login')}
            onDone={()=> navigation.navigate('login')}
            titleStyles={styles.title}
            subTitleStyles={styles.subTitleStyles}
            bottomBarColor='#fff'
            pages={[
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assests/swiper1.png')} />,
                    title: 'Contact Via Message',
                    subtitle: 'Step by step instructions to create a job search website on your own',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assests/swiper2.png')} />,
                    title: 'oportunities near you',
                    subtitle: 'Step by step instructions to create a job search website on your own',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assests/swiper3.png')} />,
                    title: 'post jobs',
                    subtitle: 'Step by step instructions to create a job search website on your own',
                },
            ]}
        />
    )
}


const styles = StyleSheet.create({
    title: {
        color: '#0351ff',
        fontSize: 24,
        textTransform: 'capitalize',
        fontWeight: 'bold'
    },
    subTitleStyles: {
        paddingHorizontal: 8,
        flexWrap: 'wrap',
        color: '#979dc2'
    }
})