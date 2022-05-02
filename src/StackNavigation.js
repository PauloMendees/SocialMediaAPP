import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from './screens/Auth/Auth'
import ForgotPassword from './screens/ForgotPassword/ForgotPassword';
import ForgotCode from './screens/ForgotPassword/ForgotCode';
import ChangePassword from './screens/ForgotPassword/ChangePassword';
import SucessConfirmation from './screens/ForgotPassword/SuccesionConfirmation';
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator()

export default function StackNavigation(){
    return(
        <Stack.Navigator initialRouteName="Auth" screenOptions={{ headerShown: false }}>
            <Stack.Group>
                <Stack.Screen name="Auth" component={Auth} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                <Stack.Screen name="ForgotCode" component={ForgotCode} />
                <Stack.Screen name="ChangePassword" component={ChangePassword} />
                <Stack.Screen name="SuccessConfirmation" component={SucessConfirmation} />
                <Stack.Screen name="Logged" component={TabNavigation} />
            </Stack.Group>
        </Stack.Navigator>
    )
}