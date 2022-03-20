import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Card({item}) {
    return (
        <View style={styles.card}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>${item.price}</Text>
            <Text style={styles.itemPromoPrice}>${item.promoPrice}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fcba03',
        margin: 5,
        padding: 5,
        borderRadius: 2,
        width: 200
    },
    itemName: {
        fontSize: 25,
    },
    itemPrice: {
        textDecorationLine: 'line-through',
        textDecorationColor: '#ff0000'
    },
    itemPromoPrice: {
        fontSize: 18
    }
})