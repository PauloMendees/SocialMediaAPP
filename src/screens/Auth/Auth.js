import React, { useState } from 'react';
import { TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, View, TouchableHighlight, Text } from 'react-native'
import CheckBox from '../../components/CheckBox/CheckBox';
import { blue, greyText, white } from '../../styles/global.colors';
import Style from './style'

export default function Auth({ navigation  }) {
    const [focusUser, setFocusUser] = useState(false)
    const [focusPassword, setFocusPassword] = useState(false)
    const [keepLogged, setKeepLogged] = useState(false)

    const [isPress, setIsPress] = React.useState(false);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={Style.container}
        >
            <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }} accessible={false}>
                <View style={Style.container}>
                    <Text style={Style.logoWhite}>SocialMedia<Text style={Style.logoBlue}>APP</Text></Text>
                    <TextInput
                        onBlur={() => setFocusUser(false)}
                        onFocus={() => setFocusUser(true)}
                        style={focusUser ? Style.focusInput : Style.input}
                        placeholder='Username or Email'
                        placeholderTextColor={greyText}
                    />
                    <TextInput
                        onBlur={() => setFocusPassword(false)}
                        onFocus={() => setFocusPassword(true)}
                        placeholder='Password'
                        style={focusPassword ? Style.focusInput : Style.input}
                        placeholderTextColor={greyText}
                        secureTextEntry={true}
                    />
                    <View style={Style.supContainer}>
                        <CheckBox
                            label="Permanecer logado"
                            fontSize={13}
                            color={white}
                            checked={keepLogged}
                            onPress={() => {setKeepLogged(!keepLogged)}}
                        />
                        <Text onPress={() => navigation.navigate('ForgotPassword')} style={Style.esqueciSenha}>Esqueci minha senha</Text>
                    </View>
                    <TouchableHighlight
                        underlayColor={blue}
                        onPressIn={() => setIsPress(true)}
                        onPressOut={() => setIsPress(false)}
                        style={isPress ? Style.pressedButton : Style.button}
                    >
                        <Text style={Style.textButton}>Login</Text>
                    </TouchableHighlight>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}