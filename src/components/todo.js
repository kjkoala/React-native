import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default Todo = ({ todo,onRemove, openWindow }) => {
    return (
        <TouchableOpacity onLongPress={() => onRemove(todo.id)} onPress={() => openWindow(todo.id)}>
            <View style={styles.todo}>
                <Text>{todo.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5
    }
})
