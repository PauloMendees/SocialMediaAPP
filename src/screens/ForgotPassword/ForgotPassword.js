import React, { useState } from 'react';
import { TextInput, TouchableWithoutFeedback, KeyboardAvoidingView, View, Keyboard, Text, TouchableHighlight, Image } from 'react-native';
import { greyText, blue } from '../../styles/global.colors';
import Style from './style'

export default function ForgotPassword({ navigation  }) {
    const [focusInput, setFocusInput] = useState(false)
    const [isPress, setIsPress] = React.useState(false);

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={Style.container}>
            <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }} accessible={false}>
                <View style={Style.container}>
                    <TouchableHighlight
                        style={Style.imgContainer}
                        onPress={() => {
                            navigation.navigate('Auth')
                        }}
                    >
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={require('../../assets/left.png')}
                        />
                    </TouchableHighlight>
                    <View style={Style.content}>
                        <Text style={Style.text}>Forgot my password</Text>
                        <TextInput
                            placeholder='E-mail'
                            placeholderTextColor={greyText}
                            style={focusInput ? Style.focusInput : Style.input}
                            onBlur={() => setFocusInput(false)}
                            onFocus={() => setFocusInput(true)}
                        />
                        <TouchableHighlight
                            style={isPress ? Style.buttonContainerPressed : Style.buttonContainer}
                            underlayColor={blue}
                            onPressIn={() => setIsPress(true)}
                            onPressOut={() => setIsPress(false)}
                        >
                            <Text style={Style.textButton}>Send e-mail</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}