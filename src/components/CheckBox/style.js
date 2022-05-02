import { StyleSheet } from 'react-native'
import { blue, white } from '../../styles/global.colors'

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    checkbox: {
        borderWidth: 1,
        borderColor: white,
        width: 13,
        height: 13,
        padding: 2,
        borderRadius: 5
    },

    checkboxChecked: {
        borderWidth: 1,
        borderColor: blue,
        width: 13,
        height: 13,
        padding: 2,
        borderRadius: 5
    },
    
    contentColor: {
        width: '100%',
        height: '100%',
        shadowColor: '#000',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        borderRadius: 5
    },

    contentColorChecked: {
        width: '100%',
        height: '100%',
        backgroundColor: blue,
        shadowColor: '#000',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        borderRadius: 5
    }
})