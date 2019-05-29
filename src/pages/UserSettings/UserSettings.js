import React, { Component } from 'react'
import { Text, View, ScrollView} from 'react-native'
import styles from './UserSettingsStyles'
import Heading from '../../components/Heading/Heading'
import PhotoUploadBar from '../../components/PhotoUploadBar/PhotoUploadBar';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import UserForm from '../../components/UserForm/UserForm';

export class UserSettings extends Component {
    render() {
        return (
            <KeyboardAwareScrollView 
                style={styles.wrapper}
                // extraHeight={-30}
                // keyboardOpeningTime={100}
                extraScrollHeight={80}
                enableOnAndroid={true}
            >
                <Heading>
                    Edit profile
                </Heading>
                <PhotoUploadBar />
                <UserForm />
                <SubmitButton text="Save"/>
            </KeyboardAwareScrollView>
        )
    }
}

export default UserSettings
