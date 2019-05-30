import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    bar: {
        // backgroundColor: '#ff00ff',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    barButton: {
        paddingVertical: 16,
        marginTop: 16,
        marginBottom: 16
    },
    photo: {
        width: 64,
        height: 64,
        borderWidth: 2,
        borderColor: '#0088CC',
        borderRadius: 32,
        marginRight: 16
    },
    text: {
        fontSize: 16,
        lineHeight: 20,
        color: '#0088CC'
    },
    photoBg: {
        borderRadius: 32,
        width: 60,
        height: 60,
    }
});

export default styles