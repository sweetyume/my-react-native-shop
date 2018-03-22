import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class Header extends Component {
    render() {
        let pic = {
            uri: 'https://static.actu.fr/uploads/2014/04/Sneakers-addict.jpg'
        };
        return (
            <Image source={pic} style={{ width: '100%', height: 110 }} />
        );
    }
}
