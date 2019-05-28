import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import UserForm from './src/pages/UserForm/UserForm';

const styles = StyleSheet.create({
  app: {
    paddingTop: 24
  }
})
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.app}>
        <UserForm />
      </View>
    );
  }
}
