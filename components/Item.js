import React from 'react';
import { View, Text} from 'react-native';
import { List, PricingCard, Card, Button } from 'react-native-elements';

const Item = (props) => {
    return(
        <View>
        <List containerStyle={{ marginBottom: 15 }}>
                <Card
                    title={props.product.name}
                    image={props.product.image}>
                    <Text style={{ marginBottom: 10, textAlign: 'center'}}>
                        {props.product.price}
                    </Text>
                    <Button
                        backgroundColor='#03A9F4'
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='Add' />
                </Card>
             {/* <PricingCard   
                color='#4f9deb'
                title={props.product.name}
                price={props.product.price}
                info={['']}
                button={{ title: 'ADD'}}
             /> */}
        </List>
        </View>
    )
}

export default Item;

