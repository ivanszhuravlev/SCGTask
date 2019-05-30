import React, { Component } from 'react'
import { Text, View, ScrollView} from 'react-native'
import styles from './UserSettingsStyles'
import Heading from '../../components/Heading/Heading'
import PhotoUploadBar from '../../components/PhotoUploadBar/PhotoUploadBar';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import UserForm from '../../components/UserForm/UserForm';

export class UserSettings extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             formValid: false,
             photoLoaded: false
        }
    }

    getFormState = (valid) => {
        this.setState({
            ...this.state,
            formValid: valid
        }, () => {
            console.log(this.state)
        })
    }

    getPhotoLoaded = (photoLoaded) => {
        this.setState({
            ...this.state,
            photoLoaded: photoLoaded
        })
    }
    

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
                <PhotoUploadBar pushPhotoLoaded={this.getPhotoLoaded}/>
                <UserForm pushValid={this.getFormState} />
                <SubmitButton text="Save" disabled={!this.state.formValid && !this.state.photoLoaded}/>
            </KeyboardAwareScrollView>
        )
    }
}

export default UserSettings
