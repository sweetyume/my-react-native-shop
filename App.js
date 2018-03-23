import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import TopHeader from './components/TopHeader';
import Shop from './components/Shop';


export default class App extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <TopHeader/>
          <Shop/>
        </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
    }
});
