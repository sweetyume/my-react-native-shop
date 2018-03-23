import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';

import Item from './Item';

const Items = (props) => {
    return (
        <View>
            {
                props.items.map((item, index) => {
                    return <Item
                        product={item}
                        key={props.id} 
                        name={props.name} 
                        price={props.price}
                    />
                })
            }
        </View>
    )
}
export default Items;

