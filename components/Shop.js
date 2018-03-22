import React, {Component} from 'react';
import { ScrollView, Text} from 'react-native';
import Basket from './Basket';
import Items from './Items';

export default class Shop extends Component {
render () {
    return(
        <ScrollView>
        <Text>Bienvenue sur un e-shop de la mort qui tue</Text>
        <Items/>
        <Basket/>
        </ScrollView>

    )
}
}
