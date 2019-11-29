import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/todo'

export const MainScreen = ({ addTodo, removeTodo, todos }) => {
    return (<View style={styles.paddings}>
        <AddTodo onSubmit={addTodo} />
        <FlatList
            keyExtractor={item => item.id.toString()}
            data={todos}
            renderItem={({ item }) => <Todo todo={item}
            onRemove={removeTodo} />
        }
    />
    </View>)
}


const styles = StyleSheet.create({
    paddings: {
        paddingHorizontal: 30,
        paddingVertical: 20
      }
})