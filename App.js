import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Shop from './components/Shop';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Shop/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
