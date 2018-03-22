import React, { Component } from 'react';
import { View, Text} from 'react-native';
import { Button, List, ListItem, PricingCard } from 'react-native-elements';

export default class Item extends Component {
    render() {
        return (
            <View>
                <List containerStyle={{ marginBottom: 30, width: 350 }}>
                    <PricingCard
                        color='#4f9deb'
                        title={this.props.name}
                        price={this.props.price}
                        info={['une basket']}
                        button={{ title: 'ADD'}}
                    />
                            {/* <ListItem
                                roundAvatar
                                avatar={{ uri: this.props.avatar_url }}
                                key={this.props.id}
                                title={this.props.name}
                            /> */}
                </List>
            </View>


        )
    }
}
