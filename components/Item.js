import React, { Component } from 'react';
import { View, Text} from 'react-native';
import { Button, PricingCard } from 'react-native-elements';


export default class Item extends Component {
    render() {
        return (
            <View>
                <Text>{this.props.name}</Text>
                <Text>{this.props.price}</Text>
                {/* <PricingCard
                    color='#4f9deb'
                    title={this.props.name}
                    price={this.props.price}
                    button={{ title: 'add' }}
                /> */}
                <Button title="add"/>
            </View>


        )
    }
}
