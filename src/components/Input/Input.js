import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import styles from './InputStyles'
import SvgUri from 'react-native-svg-uri';
import loadingCircle from '../../assets/loading.svg';
export class Input extends Component {

    constructor(props) {
        super(props)

        this.state = {
            state: 'empty',
            validate: [],
            value: ''
        };
    };

    componentWillMount() {
        this.setState({
            ...this.state,
            validate: this.props.validate.split(' ')
        })
    }

    onChange = (text) => {
        this.setState({
            ...this.state,
            value: text
        }, () => {
            this.validate(text)
        })
    }

    validate = (text) => {
        let 
            options = this.state.validate,
            valid = true

        options.map((option)=>{
            let method = true

            switch (option) {
                case "required":
                    method = this.checkNotEmpty(text)
                    break
                case "text":
                    method = this.checkText(text)
                    break
                case "phone":
                    method = this.checkPhoneValid(text)
                    break
                case "email":
                    method = this.checkEmailValid(text)
                    break
                case "link":
                    method = this.checkLinkValid(text)
                    break
                default:
                    method = true
                    break
            }

            if (!method) valid = false
        })

        this.setState({
            ...this.state,
            state: valid ? 'valid' : 'invalid'
        })
    }

    checkNotEmpty = (text) => {
        return text.trim() === '' ? false : true
    }

    checkText = (text) => {
        return /[^a-zA-Z]/.test(text.trim()) ? false : true
    }

    checkPhoneValid = (text) => {
        return /\+7[0-9]{10}/.test(text.trim())
    }

    checkEmailValid = (text) => {
        return /^[0-9a-z-\._]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i.test(text.trim())
    }

    checkLinkValid = (text) => {
        return /^(?:(?:http){1}s?\:\/{2})?(?:[0-9a-z-\.\-]+\.)+[a-z]{2,}$/.test(text.trim())
    }



    render() {
        const {state, value, loading} = this.state
        return (
            <View style={styles.inputWrapper}>
                <Text style={styles.label}>
                    {this.checkNotEmpty(value) ? this.props.placeholder : null}
                </Text>
                <TextInput
                    {...this.props}
                    style={[
                        styles.input,
                        state === 'valid' ? styles.valid : null,
                        state === 'invalid' ? styles.invalid : null,
                    ]}
                    onChangeText={this.onChange}
                    value={value}
                    placeholderTextColor="#ced3d6"
                />
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
