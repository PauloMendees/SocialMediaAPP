import { StyleSheet, Dimensions  } from 'react-native'
import { blackBackground } from './global.colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: blackBackground,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
})