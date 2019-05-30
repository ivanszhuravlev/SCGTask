import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './PhotoUploadStyles';
import Photo from './Photo';
import ImagePicker from 'react-native-image-picker';

class PhotoUploadBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: null
        };
    }

    loadImage = () => {
        const options = {
            title: 'Select photo',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                const source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    photo: source,
                }, () => {
                    this.props.pushPhotoLoaded(true)
                });
            }
        });

    }

    render() {
        return (
            <TouchableOpacity
                style={styles.barButton}
                onPress={() => this.loadImage()}
            >
                <View style={styles.bar}>
                    <Photo source={this.state.photo && this.state.photo}/>
                    <Text style={styles.text}>Upload photo</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default PhotoUploadBar;
