import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import Onboardingscreen from '../../screen/onboardingScreen';
import Login from '../../screen/login';
import Registration from '../../screen/Registration';
import Detail from '../../screen/Detail';
import { auth } from '../firebase/firebase';
import { Provider, useDispatch, useSelector } from 'react-redux'
import store from '../../store/index'
import Home from '../../View/Home';
import Proposal from '../../View/Proposal';

const Stack = createStackNavigator();

function MyStack() {
    const [user, setUser] = useState('');
    const User = useSelector(state => state.User);

    return (
        <NavigationContainer>
            {User.length ?
                <Stack.Navigator headerMode='none'>
                    <Stack.Screen name="Detail" component={Detail} />
                    <Stack.Screen name="onboardingscreen" component={Onboardingscreen} />
                    <Stack.Screen name="login" component={Login} />
                    <Stack.Screen name="register" component={Registration} />
                </Stack.Navigator>
                :
                <Stack.Navigator headerMode='none'>
                    <Stack.Screen name="home" component={Home} />
                    <Stack.Screen name="proposal" component={Proposal} />
                </Stack.Navigator>
            }
        </NavigationContainer>
    );
}





export default function Navigation(props) {
    return (
        <Provider store={store}>
            <MyStack />
        </Provider>
    )
}

