import React, {Component} from 'react';
import { StyleSheet, View, Text} from 'react-native';

import Basket from './Basket';
import Items from './Items';

import data from './assets/data.json';


export default class Shop extends Component {
render () {
    return(
        <View style={styles.container}>
        <Items items={data}/>
        <Basket/>
        </View>

    )
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
     }
});