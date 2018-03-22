import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';

import Item from './Item';

const generateId = () => Math.floor(Math.random() * 1000);

const list = [
    { id: generateId(), name: 'Air Max', price: '100 €', info: 'great'},
    { id: generateId(), name: 'Gazelle', price: '80 €', info: 'great'},
    { id: generateId(), name: 'Stan', price: '70 €', info: 'great'},
    { id: generateId(), name: 'All Stars', price: '60 €', info: 'great'},
    { id: generateId(), name: 'Vans', price: '50 €', info: 'great'},
    { id: generateId(), name: 'Running', price: '15 €', info: 'great'}
]
export default class Items extends React.Component {
    render() {
    return( 
            <View>
            {list.map((item, index) => <Item 
            key={item.id} name={item.name} price={item.price} info={item.info}/>)}
            </View>
        )  
    }
}
