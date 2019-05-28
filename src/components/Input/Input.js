import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import styles from './InputStyles'

export class Input extends Component {
    render() {
        return (
            <View>
                <TextInput 
                    {...this.props}
                    style={styles.input}
                />
                <Text></Text>
            </View>
        )
    }
}

export default Input
