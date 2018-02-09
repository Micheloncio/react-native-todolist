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
    viewList: {
        flexDirection: 'row'
    },
    textList:{
        fontSize: 20,
        marginTop: 10
    }
})

export default TodoListStyles;