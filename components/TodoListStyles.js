import {StyleSheet} from 'react-native'

const TodoListStyles = StyleSheet.create({
    view:{
        flex: 1, 
        alignItems: 'center' 
    },
    scrollView:{
        width:300,
        alignItems: 'center' 
    },
    input: {
        height: 50,
        width: 300,
        fontSize: 20
    },
    textList:{
        fontSize: 20,
        marginTop: 50
    }
})

export default TodoListStyles;