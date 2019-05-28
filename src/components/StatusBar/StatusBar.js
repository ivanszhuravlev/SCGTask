import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './StatusBarStyles'
const arrow = require('../../assets/arrow.png')

class StatusBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.statusbar}>
        <TouchableOpacity>
          <Image source={arrow} style={styles.arrow} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default StatusBar;
