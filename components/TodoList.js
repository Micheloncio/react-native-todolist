import React from 'react';
import {Text, View, TextInput } from 'react-native';
import {TabNavigator} from 'react-navigation';
import TodoListStyles from './TodoListStyles'

export default class TodoList extends React.Component{
    static navigationOptions = {
        title: 'Todo List'
    };
    render(){
        return(
            <View style={TodoListStyles.view}>
                <TextInput 
                    style={TodoListStyles.input} 
                    placeholder='Type here the task'
                />
            </View>
        );
    }
}