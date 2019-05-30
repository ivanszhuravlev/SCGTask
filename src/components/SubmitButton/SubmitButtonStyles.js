import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    button: {
        width: '100%',
        flexDirection: 'row',
        paddingVertical: 14,
        backgroundColor: '#0088CC',
        borderRadius: 4,
        justifyContent: 'center',
        marginTop: 47,
    },
    buttonText: {
        fontSize: 16,
        letterSpacing: 0.25,
        color: "#EBEDEE"
    },
    disabled: {
        backgroundColor: '#ced3d6'
    }
});

export default styles