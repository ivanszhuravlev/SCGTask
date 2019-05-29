import React from 'react'
import { Text } from 'react-native'
import styles from './HeadingStyles'

const Heading = (props) => {
    const {children} = props
    return (
        <Text style={styles.heading}>
            {children}
        </Text>
    )
}

export default Heading
