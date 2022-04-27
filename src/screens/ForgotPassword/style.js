import { StyleSheet, Dimensions } from 'react-native'
import { blackBackground, blue, greyText, white } from '../../styles/global.colors'

export default StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        backgroundColor: blackBackground
    },

    content: {
        height: '85%',
        width: '100%',
        backgroundColor: blackBackground,
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        width: '80%',
        fontSize: 20,
        fontWeight: 'bold',
        color: blue,
        marginBottom: 15
    },

    input: {
        width: '80%',
        borderWidth: 1,
        borderColor: greyText,
        paddingLeft: 15,
        paddingRight: 15,
        color: greyText,
        borderRadius: 10
    },

    focusInput: {
        width: '80%',
        borderWidth: 1,
        borderColor: blue,
        paddingLeft: 15,
        paddingRight: 15,
        color: blue,
        borderRadius: 10
    },

    buttonContainer: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        backgroundColor: blue,
        padding: 10,
        borderRadius: 10,
    },

    buttonContainerPressed: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        backgroundColor: blue,
        padding: 10,
        borderRadius: 10,
        opacity: 0.7
    },

    textButton: {
        fontSize: 17,
        fontWeight: 'bold',
        color: blackBackground
    },

    imgContainer: {
        marginLeft: '10%',
        width: '13%',
        borderRadius: 10
    }
})