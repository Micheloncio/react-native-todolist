import React from 'react';
import {Text, View, ScrollView, TextInput, FlatList } from 'react-native';
import {TabNavigator} from 'react-navigation';
import TodoListStyles from './TodoListStyles'

export default class TodoList extends React.Component{
    static navigationOptions = {
        title: 'Todo List'
    };
    constructor(){
        super()
        this.state = {
            text: ''
        }
    }
    addTask = () =>{
        this.props.screenProps.addTask(this.state.text)
        this.setState({text:''})
    }
    render(){
        return(
            
            <View style={TodoListStyles.view}>
                <TextInput 
                    style={TodoListStyles.input} 
                    placeholder='Type here the task'
                    onChangeText={(text)=>this.setState({text})}
                    value={this.state.text}
                    onSubmitEditing={this.addTask}
                />
                <ScrollView contentContainerStyle={TodoListStyles.scrollView}>
                    <FlatList
                        data={this.props.screenProps.tasks}
                        renderItem={({item}) => <Text style={TodoListStyles.textList}>{item.key}</Text>}
                    />
                </ScrollView>
            </View>
        );
    }
}