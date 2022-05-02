import React, { useState } from 'react';
import { KeyboardAvoidingView, TouchableWithoutFeedback, View, TouchableHighlight, Text, TextInput, Image, Keyboard } from 'react-native'
import Button from '../../components/Button/Button';
import { greyText, blue, blackBackground } from '../../styles/global.colors';
import Style from './style'

export default function ForgotCode({ navigation }) {
    const [focusInput, setFocusInput] = useState(false)
    const [isPress, setIsPress] = React.useState(false);

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={Style.container}>
            <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }} accessible={false}>
                <View style={Style.container}>
                    <TouchableHighlight
                        style={Style.imgContainer}
                        onPress={() => {
                            navigation.navigate('ForgotPassword')
                        }}
                    >
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={require('../../assets/left.png')}
                        />
                    </TouchableHighlight>
                    <View style={Style.content}>
                        <Text style={Style.text}>Put your email code</Text>
                        <View style={Style.inputContainer}>
                            <TextInput
                                placeholder='Six digits code'
                                placeholderTextColor={greyText}
                                style={focusInput ? Style.focusInput : Style.input}
                                onBlur={() => setFocusInput(false)}
                                onFocus={() => setFocusInput(true)}
                            />
                        </View>
                        <Button
                            backgroundColor={blue}
                            width="80%"
                            text="Confirm"
                            textSize={17}
                            fontWeight="bold"
                            textColor={blackBackground}
                            marginTop={15}
                            onPress={() => {
                                navigation.navigate("SuccessConfirmation")
                            }}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}