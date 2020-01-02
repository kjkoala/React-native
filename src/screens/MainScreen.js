import React, { useContext } from 'react'
import { StyleSheet, View, FlatList, Image } from 'react-native'
import AddTodo from '../components/AddTodo'
import Todo from '../components/todo'
import { TodoContext } from '../context/todo/TodoContext'
import { ScreenContext } from '../context/screen/screenContext'

export const MainScreen = () => {
    const { addTodo, removeTodo, todos } = useContext(TodoContext)
    const { changeScreen } = useContext(ScreenContext)
    return (<View style={styles.paddings}>
        <AddTodo onSubmit={addTodo} />
        {todos.length > 0 && <FlatList
            keyExtractor={item => item.id.toString()}
            data={todos}
            renderItem={({ item }) => <Todo todo={item}
                onRemove={removeTodo} openWindow={changeScreen} />
            }
        />}
        {todos.length === 0 && <View style={styles.imageWrap}>
            <Image style={styles.image} source={require('../../assets/complete.png')} />
        </View>}
    </View>)
}


const styles = StyleSheet.create({
    paddings: {
        paddingHorizontal: 30,
        paddingVertical: 20
    },
    imageWrap: {
        height: 400,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
})