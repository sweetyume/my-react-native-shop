import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';


const TopHeader = () => {
        return (
            <View style={styles.container}>
            <Header
                 leftComponent={{ icon: 'menu', color: '#000' }}
                 centerComponent={{ text: 'Books', style: { color: '#fff' } }}
                 rightComponent={{ icon: 'shopping-cart', color: '#000' }}
                 outerContainerStyles={{ backgroundColor: '#03A9F4' }}
            />
            <Image
                 style={{ width: '100%', height: 200 }}
                 source={{ uri: 'https://images.unsplash.com/photo-1492539438225-2666b2a98f93?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7c086ad69a16cc4928471ba8d95ca153&auto=format&fit=crop&w=500&q=60' }}
             />
            </View>
            );
}
export default TopHeader;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});
