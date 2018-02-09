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
      count: 1,
      tasks:[]
    }
  }

  addTask = (text) =>{
    this.setState((prevState)=>{
        return {
          tasks: [...prevState.tasks, {key: text, done:false, id: prevState.count}],
          count: prevState.count + 1
        }
    })
  }

  changeToDone = (id) =>{
    const tasks = this.state.tasks.map(task=>{
      if(task.id === id){
        task.done = true
      }
      return task
    })
    this.setState({tasks})
  }

  removeTask = (id)=>{
    const tasks = this.state.tasks.filter(task=>{
      return task.id!==id
    })
    this.setState({tasks})
  }

  render() {
    return(
      <View style={{flex: 1}}>
        <View style={{height:24}}/>
        <MainNav screenProps={{tasks: this.state.tasks, addTask: this.addTask, changeToDone: this.changeToDone, removeTask: this.removeTask}} />
      </View>
     );
  }
}