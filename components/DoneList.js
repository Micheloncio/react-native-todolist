import React from 'react';
import {Text, View, ScrollView, FlatList, Button } from 'react-native';
import {TabNavigator} from 'react-navigation';
import TodoListStyles from './TodoListStyles'

export default class DoneList extends React.Component{
    static navigationOptions = {
        title: 'Done List'
    };
    render(){
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ScrollView 
                    contentContainerStyle={TodoListStyles.scrollView}
                    showsVerticalScrollIndicator={false}
                    >
                <FlatList
                        data={this.props.screenProps.tasks}
                        renderItem={({item}) =>{
                                if(item.done){
                                    return(                                    
                                        <View style={TodoListStyles.viewList}>
                                            <Text style={TodoListStyles.textList}>
                                                {item.key + ' '}
                                            </Text>
                                            <Button
                                                onPress={()=>this.props.screenProps.removeTask(item.id)}
                                                title='✖︎'
                                                color='red'
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