import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import UserForm from './src/pages/UserForm/UserForm';
import StatusBar from './src/components/StatusBar/StatusBar'

const styles = StyleSheet.create({
  app: {
    paddingTop: 21
  }
})
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.app}>
        <StatusBar />
        <UserForm />
      </View>
    );
  }
}
