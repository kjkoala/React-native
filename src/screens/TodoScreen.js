import React, { useState, useContext } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { ScreenContext } from '../context/screen/screenContext'
import { TodoContext } from '../context/todo/TodoContext'

import AppCard from '../../ui/AppCard'
import EditModal from '../components/EditModal'

export const TodoScreen = () => {
    const [modal, setModal] = useState(false)
    const { todos, updateTodo, removeTodo } = useContext(TodoContext)
    const { todoId, changeScreen } = useContext(ScreenContext)
    const title = todos.find(t => t.id === todoId)
    const saveHandler = value => {
        updateTodo(title.id, value)
        setModal(false)
    }
    return (<View>
        <EditModal
            visible={modal}
            closeModal={() => setModal(false)}
            value={title.title}
            onSave={saveHandler}
        />
        <AppCard style={styles.card}>
            <Text>{title.title}</Text>
            <Button title="Редактировать"
                onPress={() => setModal(true)}
            />
        </AppCard>
        <View style={styles.button}>
            <Button title="Назад" onPress={() => changeScreen(null)} color="orange" />
            <Button title="Удалить" onPress={() => removeTodo(title.id)} color="red" />
        </View>
    </View>)
}

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    card: {
        borderColor: 'orange'
    }
})