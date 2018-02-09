import React from 'react';
import {Text, View, ScrollView, FlatList, Button } from 'react-native';
import ListTasks from './ListTasks'
import TodoAppStyles from './TodoAppStyles'


export default class DoneList extends React.Component{
    static navigationOptions = {
        title: 'Done List'
    };
    render(){
        return(
            <View style={TodoAppStyles.view}>
                <ListTasks 
                    tasks={this.props.screenProps.tasks}
                    title={'✖︎'} 
                    color={'red'} 
                    handleOnPress={this.props.screenProps.removeTask}
                    done={true}
                />
            </View>
        );
    }
}