import React from 'react';
import {Text, View} from 'react-native';
import {TabNavigator} from 'react-navigation';

export default class DoneList extends React.Component{
    static navigationOptions = {
        title: 'Done List'
    };
    render(){
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text> This is the DoneList</Text>
            </View>
        );
    }
}