import React from 'react';
import { Text, SafeAreaView, View} from 'react-native'
import { blackBackground } from '../../styles/global.colors';

export default function Feed({ navigation }) {
    return (
        <SafeAreaView style={{
            width: '100%',
            height: '100%',
            backgroundColor: blackBackground
        }}>
            <Text>Teste</Text>
        </SafeAreaView>
    )
}