import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import Input from '../Input/Input';
import styles from './UserFormStyles'
import Heading from '../Heading/Heading'
import PhotoUploadBar from '../PhotoUploadBar/PhotoUploadBar';
import SubmitButton from '../SubmitButton/SubmitButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const fields = [
    {
        placeholder: 'First name',
        validate: "text required",
        name: 'firstname'
    },
    {
        placeholder: 'Last name',
        validate: "text required",
        name: 'lastname'
    },
    {
        placeholder: 'Phone',
        validate: "phone required",
        name: 'phone'
    },
    {
        placeholder: 'Email',
        validate: "email required",
        autoCapitalize: "none",
        name: 'email'
    },
    {
        placeholder: 'Link',
        validate: "link required",
        autoCapitalize: "none",
        modify: "social",
        name: 'link'
    },
]

export class UserForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            fields: []
        };
    };

    getState = (val, valid, name) => {
        let fields = this.state.fields

        fields[name] = {val, valid}

        this.setState({
            values: fields
        }, () => {
            console.log(this.state.values)
        })
    }


    render() {
        return (
            <View>
                {
                    fields.map((field, i) => {
                        return (
                            <Input
                                {...field}
                                key={i}
                                pushState={(val, valid) => this.getState(val, valid, field.name)}
                            />
                        )
                    })
                }
            </View>
        )
    }
}

export default UserForm
