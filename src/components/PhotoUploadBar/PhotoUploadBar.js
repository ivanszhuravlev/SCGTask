import React, { Component } from 'react';
import { View, Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import styles from './PhotoUploadStyles';
import Photo from './Photo';


class PhotoUploadBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <TouchableOpacity style={styles.barButton}>
                <View style={styles.bar}>
                        <Photo />
                        <Text style={styles.text}>Upload photo</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default PhotoUploadBar;
