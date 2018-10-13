/**
 * TODO:
 * Implement the actual home screen / landing page for the app
 */

import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

type Props = {};
export default class HomeComponent extends React.Component<Props> {
  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Potluck!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});
