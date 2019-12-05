import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button, Modal, Alert } from 'react-native'

export default EditModal = ({ visible, closeModal, value, onSave }) => {
    const [title, setTitle] = useState(value)
    const saveHandler = () => {
        if (title.trim().length < 3) {
            Alert.alert('Слишком короткое название');
            return;
        }
        onSave(title)
    }
    return (
        <Modal visible={visible} animationType='slide'>
            <View style={styles.wrap}>
                <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    maxLength={64}
                    placeholder="Введите название"
                    value={title}
                    onChangeText={setTitle}
                />
                <View style={styles.buttons}>
                    <Button title="Отменить" onPress={closeModal} color="orange" />
                    <Button title="Сохранить" color="green" onPress={saveHandler} />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        padding: 10,
        borderBottomColor: 'orange',
        borderBottomWidth: 2,
        width: '80%'
    },
    buttons: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})