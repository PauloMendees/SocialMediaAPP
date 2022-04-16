import { StyleSheet, Dimensions} from 'react-native'
import { blackBackground, blue, greyText } from '../../styles/global.colors'

export default StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        color: greyText,
        width: '80%',
        borderWidth: 1,
        borderColor: greyText,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 10,
        fontSize: 15,
        marginTop: 15
    },

    focusInput: {
        color: blue,
        width: '80%',
        borderWidth: 1,
        borderColor: blue,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 10,
        fontSize: 15,
        marginTop: 15
    },

    button: {
        width: '80%',
        backgroundColor: blue,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
    },

    pressedButton: {
        width: '80%',
        backgroundColor: blue,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        opacity: 0.6
    },

    textButton: {
        fontSize: 17,
        fontWeight: 'bold',
        color: blackBackground
    }
})