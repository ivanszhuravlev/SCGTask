import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    input: {
        width: '100%',
        paddingHorizontal: 0,
        paddingVertical: 8,
        borderBottomColor: '#DDE1E2',
        borderBottomWidth: 1,
        fontSize: 18,
        // lineHeight: 24
        margin: 0

    },
    inputWrapper: {
        position: 'relative',
        margin: 0
    },
    connectButton: {
        position: 'absolute',
        right: 0,
        top: 11
    },
    connectText: {
        fontSize: 16,
        color: '#0088CC'
    },
    alert: {
        fontSize: 15,
        marginVertical: 8,
        padding: 0,

    }
})

export default styles