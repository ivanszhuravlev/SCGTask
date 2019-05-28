import React, { Component } from 'react'
import { Text, View, ScrollView} from 'react-native'
import Input from '../../components/Input/Input';
import styles from './UserFormStyles'
import StatusBar from '../../components/StatusBar/StatusBar'
import Heading from '../../components/Heading/Heading'
import PhotoUploadBar from '../../components/PhotoUploadBar/PhotoUploadBar';

export class UserForm extends Component {
    render() {
        return (
            <ScrollView style={styles.wrapper}>
                <Heading>
                    Edit profile
                </Heading>
                <PhotoUploadBar />
                <Input 
                    placeholder="First name"
                />
            </ScrollView>
        )
    }
}

export default UserForm
