import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import StatusBar from './src/components/StatusBar/StatusBar'
import UserSettings from './src/pages/UserSettings/UserSettings';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const styles = StyleSheet.create({
  app: {
    paddingTop: 21
  }
})
export default class App extends Component<Props> {
  render() {
    return (
      <KeyboardAwareScrollView 
        style={styles.app}
        extraScrollHeight={-80}
        enableOnAndroid={true}
      >
        <StatusBar />
        <UserSettings />
      </KeyboardAwareScrollView>
    );
  }
}
