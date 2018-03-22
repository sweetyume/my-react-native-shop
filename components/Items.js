import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';

import Item from './Item';

const generateId = () => Math.floor(Math.random() * 1000);
const list = [
    { id: generateId(), name: 'Air Max', price: 100},
    { id: generateId(), name: 'Gazelle', price: 80},
    { id: generateId(), name: 'Stan', price: 70}
]
export default class Items extends React.Component {
    render() {
    return( 
            <View>
            {list.map((item, index) => <Item key={item.id} name={item.name} price={item.price}/>)}
            </View>
        )  
    }
}
