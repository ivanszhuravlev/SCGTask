import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import styles from './InputStyles'

export class Input extends Component {
    render() {
        console.log(this.props)
        return (
            <View style={styles.inputWrapper}>
                <TextInput 
                    {...this.props}
                    style={styles.input}
                />
                <Text style={styles.alert}></Text>
                {
                    this.props.modify && this.props.modify === "social" ? (
                        <TouchableOpacity style={styles.connectButton}>
                            <Text style={styles.connectText}>Connect</Text>
                        </TouchableOpacity>
                    ) : null
                }
            </View>
        )
    }
}

export default Input
