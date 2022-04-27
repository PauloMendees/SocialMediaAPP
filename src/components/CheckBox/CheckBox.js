import React from 'react';
import { Text, View, TouchableOpacity  } from "react-native" 
import Style from './style'

export default function CheckBox(props) {

  return (
   <View style={Style.container}>
       <TouchableOpacity style={props.checked ? Style.checkboxChecked : Style.checkbox} onPress={props.onPress} >
            <View style={props.checked ? Style.contentColorChecked : Style.contentColor} />
       </TouchableOpacity>
       <Text
            onPress={props.onPress}
            style={{
                fontSize: props.fontSize,
                color: props.color,
                opacity: !!props.labelOpacity ? props.labelOpacity : 0.7,
                marginLeft: 10
            }}
        >
           {props.label}
       </Text>
   </View>
  );
}