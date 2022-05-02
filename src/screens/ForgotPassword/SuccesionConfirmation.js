import React from 'react';
import { Text, View, SafeAreaView, TouchableHighlight, Image } from 'react-native'
import Button from '../../components/Button/Button';
import { blackBackground, blue, greyText, white } from '../../styles/global.colors';
import Style from './style'

export default function SucessConfirmation({ navigation }) {
    return (
        <SafeAreaView style={Style.container}>
            <View style={Style.content}>
                <Text
                    style={{
                        width: '80%',
                        color: greyText,
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}>
                    Password changed!
                </Text>
                <Button
                    backgroundColor={blue}
                    width="80%"
                    text="Go to Login"
                    marginTop={15}
                    textSize={17}
                    textColor={blackBackground}
                    onPress={() => {
                        navigation.navigate('Auth')
                    }}
                />
            </View>
        </SafeAreaView>
    )
}