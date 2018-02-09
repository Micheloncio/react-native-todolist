import React from 'react';
import {Text, View, ScrollView, FlatList, Button } from 'react-native';
import TodoAppStyles from './TodoAppStyles'

export default class ListTasks extends React.Component{
    render(){
        return(
            <ScrollView 
                    contentContainerStyle={TodoAppStyles.scrollView}
                    showsVerticalScrollIndicator={false}
                    >
                <FlatList
                        data={this.props.tasks}
                        renderItem={({item}) =>{
                                if(item.done === this.props.done){
                                    return(                                    
                                        <View style={TodoAppStyles.viewList}>
                                            <Text style={TodoAppStyles.textList}>
                                                {item.key + ' '}
                                            </Text>
                                            <Button
                                                onPress={()=>this.props.handleOnPress(item.id)}
                                                title={this.props.title}
                                                color={this.props.color}
                                            />    
                                       </View>
                                    )
                                }
                            }                         
                        }
                    />
            </ScrollView>
        );
    }
}