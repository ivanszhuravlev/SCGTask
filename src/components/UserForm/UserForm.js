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
            fields: {},
            valid: false
        };
    };

    componentWillMount() {
        fields.map((field) => {
            const fieldsFromState = this.state.fields
            fieldsFromState[field.name] = {val: "", valid: false}

            this.setState({
                ...this.state,
                fields: fieldsFromState
            })
        })
    }

    getState = (val, valid, name) => {
        let fields = this.state.fields

        fields[name] = {val, valid}

        this.setState({
            ...this.state,
            fields: fields
        }, () => {
            this.summonValidations()
        })
    }

    summonValidations = () => {
        let 
            valid = true,
            inputs = this.state.fields
        for (let key in inputs) {
            if (inputs.hasOwnProperty(key)) {
                const input = inputs[key];
                if (input.valid === false) {
                    valid = false
                }
            }
        }

        this.props.pushValid(valid)
        console.log(this.state)
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
