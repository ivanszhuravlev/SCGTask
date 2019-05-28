import React, { Component } from 'react'
import { Text, View, ScrollView} from 'react-native'
import Input from '../../components/Input/Input';
import styles from './UserFormStyles'

export class UserForm extends Component {
    render() {
        return (
            <ScrollView style={styles.wrapper}>
                <Input 
                    placeholder="First name"
                />
            </ScrollView>
        )
    }
}

export default UserForm
