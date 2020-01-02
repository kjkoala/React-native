import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button, Alert, Keyboard } from 'react-native'

export default AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState('')
    const pressHandler = () => {
        if (!value.trim()) return Alert.alert('Ошибка', 'Название дела не может быть пустым')
        onSubmit(value)
        setValue('')
        Keyboard.dismiss()
    }

    return (
        <View style={styles.wrapper}>
            <TextInput
                style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder="Название дела"
            />
            <Button title="Добавить" onPress={pressHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        backgroundColor: 'white',
        width: '70%',
        borderBottomColor: 'blue',
        borderStyle: 'solid',
        borderBottomWidth: 2
    }
})
