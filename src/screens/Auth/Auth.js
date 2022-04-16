import React, {useState} from 'react';
import { TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, View, TouchableHighlight, Text } from 'react-native'
import { blue, greyText } from '../../styles/global.colors';
import Style from './style'

export default function Auth(props) {
    const [focusUser, setFocusUser] = useState(false)
    const [focusPassword, setFocusPassword] = useState(false)

    var [ isPress, setIsPress ] = React.useState(false);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={Style.container}
        >
            <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss() }} accessible={false}>
                <View style={Style.container}>
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
                    <TouchableHighlight
                        underlayColor = {blue}
                        onPressIn={() => setIsPress(true)}
                        onPressOut={() => setIsPress(false)}
                        style={ isPress ? Style.pressedButton : Style.button}
                    >
                        <Text style={Style.textButton}>Login</Text>
                    </TouchableHighlight>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}