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
        margin: 0,
    },
    inputWrapper: {
        position: 'relative',
        margin: 0
    },
    connectButton: {
        position: 'absolute',
        right: 0,
        bottom: 8
    },
    connectText: {
        fontSize: 16,
        color: '#0088CC'
    },
    label: {
        fontSize: 15,
        marginTop: 16,
        marginBottom: 0,
        padding: 0,
        color: '#ced3d6'
    },
    invalid: {
        borderBottomColor: '#cc0056'
    },
    valid: {
        borderBottomColor: '#0088cc'
    }
})

export default styles