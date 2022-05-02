import React, { useState } from 'react';
import { KeyboardAvoidingView, TouchableWithoutFeedback, View, TouchableHighlight, Text, TextInput, Image, Keyboard } from 'react-native'
import CheckBox from '../../components/CheckBox/CheckBox';
import { greyText, blue } from '../../styles/global.colors';
import Style from './style'

export default function ChangePassword({ navigation }) {
    const [focusInput, setFocusInput] = useState(false)
    const [focusInput2, setFocusInput2] = useState(false)
    const [isPress, setIsPress] = useState(false);
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setConfirmPassword] = useState(false)

    function handleShowPassword(){
        setShowPassword(!showPassword)
    }

    function handleShowConfirmPassword(){
        setConfirmPassword(!showConfirmPassword)
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={Style.container}>
            <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }} accessible={false}>
                <View style={Style.container}>
                    <TouchableHighlight
                        style={Style.imgContainer}
                        onPress={() => {
                            navigation.navigate('ForgotCode')
                        }}
                    >
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={require('../../assets/left.png')}
                        />
                    </TouchableHighlight>
                    <View style={Style.content}>
                        <Text style={Style.text}>Change your password</Text>
                        <View style={Style.inputContainer}>
                            <TextInput
                                placeholder='New Password'
                                placeholderTextColor={greyText}
                                style={focusInput ? Style.focusInput : Style.input}
                                onBlur={() => setFocusInput(false)}
                                onFocus={() => setFocusInput(true)}
                                secureTextEntry={!showPassword}
                            />
                            <CheckBox
                                label="Show Password"
                                color={greyText}
                                checked={showPassword}
                                onPress={handleShowPassword}
                            />
                        </View>
                        <View style={Style.inputContainer}>
                            <TextInput
                                placeholder='Confirm Password'
                                placeholderTextColor={greyText}
                                style={focusInput2 ? Style.focusInput : Style.input}
                                onBlur={() => setFocusInput2(false)}
                                onFocus={() => setFocusInput2(true)}
                                secureTextEntry={!showConfirmPassword}
                            />
                            <CheckBox
                                label="Show Confirmation"
                                color={greyText}
                                checked={showConfirmPassword}
                                onPress={handleShowConfirmPassword}
                            />
                        </View>
                        <TouchableHighlight
                            style={isPress ? Style.buttonContainerPressed : Style.buttonContainer}
                            underlayColor={blue}
                            onPressIn={() => setIsPress(true)}
                            onPressOut={() => setIsPress(false)}
                            onPress={() => {
                                navigation.navigate('SuccessConfirmation')
                            }}
                        >
                            <Text style={Style.textButton}>Confirm</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}