import React, {useState} from 'react';
import { Text, TouchableHighlight } from 'react-native'

export default function Button(props) {
    const [isPress, setIsPress] = useState(false)

    return (
        <TouchableHighlight
            style={{
                backgroundColor: props.backgroundColor,
                width: props.width,
                height: props.height,
                marginTop: !!props.marginTop ? props.marginTop : 0,
                marginBottom: !!props.marginBottom ? props.marginBottom : 0,
                opacity: isPress ? 0.8 : 1,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
            }}
            underlayColor={ props.backgroundColor}
            onPress={props.onPress}
            onPressIn={() => setIsPress(true)}
            onPressOut={() => setIsPress(false)}
        >
            <Text
                style={{
                    color: props.textColor,
                    fontSize: props.textSize,
                    fontWeight: !!props.fontWeight ? props.fontWeight : 'bold'
                }}
            >
                {props.text}
            </Text>
        </TouchableHighlight>
    )
}