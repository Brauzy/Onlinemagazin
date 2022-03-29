import React, {Component} from 'react';
import {FlatList} from 'react-native';
import Card from './Card'
import {Text} from 'react-native';


class List extends Component{
    state = {
        items: []
    }

    componentDidMount() {
        const items = require('./data.json').items;
        this.setState( {items} );
    }
    render() {
        return(
            <FlatList
                data = {this.state.items }
                renderItem = { ({item}) => <Card item = {item} />}
            ></FlatList>
        );
    };
};

export default List;