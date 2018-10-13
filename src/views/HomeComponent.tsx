/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */
import * as React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

type Props = {};
export default class HomeComponent extends React.Component<Props> {
  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
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
