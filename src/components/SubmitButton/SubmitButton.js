import React from 'react'
import { TouchableHighlight, Text } from 'react-native'
import styles from './SubmitButtonStyles'

const SubmitButton = (props) => {

    callback = () => {
        return
    }

    return (
        <TouchableHighlight 
            underlayColor="#005885" 
            style={[styles.button, props.disabled && styles.disabled]}
            onPress={()=>this.callback()}
            disabled={props.disabled}
            
        >
            <Text style={styles.buttonText}>{props.text}</Text>
        </TouchableHighlight>
    )
}

export default SubmitButton