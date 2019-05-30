import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import styles from './PhotoUploadStyles';

const Photo = (props) => {
    return (
        <ImageBackground style={styles.photo} imageStyle={styles.photoBg} source={props.source}>

        </ImageBackground>
    )
}

export default Photo
