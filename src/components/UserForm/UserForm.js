import React, { Component } from 'react'
import { Text, View, ScrollView} from 'react-native'
import Input from '../Input/Input';
import styles from './UserFormStyles'
import Heading from '../Heading/Heading'
import PhotoUploadBar from '../PhotoUploadBar/PhotoUploadBar';
import SubmitButton from '../SubmitButton/SubmitButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export class UserForm extends Component {
    render() {
        return (
            <View>
                <Input 
                    placeholder="First name"
                    validate="text required"
                />
                <Input 
                    placeholder="Last name"
                    validate="text required"
                />
                <Input 
                    placeholder="Phone"
                    validate="phone required"
                />
                <Input 
                    placeholder="Email"
                    validate="email required"
                    autoCapitalize="none"
                />
                <Input 
                    placeholder="Link"
                    validate="link required"
                    modify="social"
                    autoCapitalize="none"
                />
            </View>
        )
    }
}

export default UserForm
