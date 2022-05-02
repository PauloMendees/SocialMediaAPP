import { StyleSheet, Dimensions} from 'react-native'
import { blackBackground, blue, greyText, white } from '../../styles/global.colors'

export default StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: blackBackground
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
    },

    logoWhite: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        color: white
    },

    logoBlue: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        color: blue
    },

    checkboxContainer: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    borderCheckbox: {
        width: 15,
        height: 15,
        borderWidth: 1,
        borderColor: blue,
        borderRadius: 50,
        padding: 2.5,
        alignItems: 'center',
        justifyContent: 'center'
    },

    checkMarked: {
        width: '100%',
        height: '100%',
        backgroundColor: blue,
        borderRadius: 50,
    },

    checkUnmarked: {
        width: '100%',
        height: '100%',
        backgroundColor: 'inherit',
        borderRadius: 50,
    },

    labelCheckbox: {
        marginLeft: 8,
        color: blue,
        fontWeight: 'bold'
    },

    supContainer: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
    },

    esqueciSenha: {
        color: white,
        opacity: 0.7,
        fontSize:  12,
    }
})