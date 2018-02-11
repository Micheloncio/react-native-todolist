import React from 'react';
import {Text, View, ScrollView, TextInput, FlatList, Button } from 'react-native';
import ListTasks from './ListTasks'
import TodoAppStyles from './TodoAppStyles'

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
        if(this.state.text){
            this.props.screenProps.addTask(this.state.text)
            this.setState({text:''})
        }
    }

    render(){
        return(
            
            <View style={TodoAppStyles.view}>
                <TextInput 
                    style={TodoAppStyles.input} 
                    placeholder='Type here the task'
                    onChangeText={(text)=>this.setState({text})}
                    value={this.state.text}
                    onSubmitEditing={this.addTask}
                />
                <ListTasks 
                    tasks={this.props.screenProps.tasks}
                    title={'✔︎'} 
                    color={'green'} 
                    handleOnPress={this.props.screenProps.changeToDone}
                    done={false}
                />
            </View>
        );
    }
}