import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';

import DoneList from './components/DoneList';
import TodoList from './components/TodoList';


const MainNav = TabNavigator({
  Todo: { screen: TodoList },
  Done: { screen: DoneList },
});



export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      tasks:[]
    }
  }

  addTask = (text) =>{
    this.setState((prevState)=>{
        return {
          tasks: [...prevState.tasks, {key: text, done:false}]
        }
    })
  }

  render() {
    return(
      <View style={{flex: 1}}>
        <View style={{height:24}}/>
        <MainNav screenProps={{tasks: this.state.tasks, addTask: this.addTask}} />
      </View>
     );
  }
}