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
  render() {
    return(
      <View style={{flex: 1}}>
        <View style={{height:24}}/>
        <MainNav />
      </View>
     );
  }
}