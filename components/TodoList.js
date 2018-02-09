import React from 'react';
import {Text, View, ScrollView, TextInput, FlatList, Button } from 'react-native';
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
                <ScrollView 
                    contentContainerStyle={TodoListStyles.scrollView}
                    showsVerticalScrollIndicator={false}
                    >
                    <FlatList
                        data={this.props.screenProps.tasks}
                        renderItem={({item}) =>{
                                if(!item.done){
                                    return(                                    
                                        <View style={TodoListStyles.viewList}>
                                            <Text style={TodoListStyles.textList}>
                                                {item.key + ' '}
                                            </Text>
                                            <Button
                                                onPress={()=>this.props.screenProps.changeToDone(item.id)}
                                                title='✔︎'
                                                color='green'
                                            />    
                                       </View>
                                    )
                                }
                            }                         
                        }
                    />
                </ScrollView>
            </View>
        );
    }
}