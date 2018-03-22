import React, {Component} from 'react';
import { ScrollView, Text} from 'react-native';
import Header from './Header';
import Basket from './Basket';
import Items from './Items';

export default class Shop extends Component {
render () {
    return(
        <ScrollView>
        <Header/>
        <Items/>
        <Basket/>
        </ScrollView>

    )
}
}
