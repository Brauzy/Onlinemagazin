import React, {Component} from 'react';
import {FlatList} from 'react-native';
import Card from './Card'
import {Text} from 'react-native';


class List extends Component{
    state = {
        events: []
    }

    componentDidMount() {
        const events = require('./data.json').events;
        this.setState( {events} );
    }
    render() {
        return(
            <FlatList
                data = {this.state.events }
                renderItem = { ({item}) => <Card eventItem = {item} />}
            ></FlatList>
        );
    };
};

export default List;