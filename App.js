import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import StatusBar from './src/components/StatusBar/StatusBar'
import UserSettings from './src/pages/UserSettings/UserSettings';

const styles = StyleSheet.create({
  app: {
    paddingTop: 21
  }
})
export default class App extends Component<Props> {
  render() {
    return (
      <ScrollView style={styles.app}>
        <StatusBar />
        <UserSettings />
      </ScrollView>
    );
  }
}
