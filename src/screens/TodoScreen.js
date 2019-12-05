import React, { useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

import AppCard from '../../ui/AppCard'
import EditModal from '../components/EditModal'

export const TodoScreen = ({ closeModal, title, onRemove, onSave }) => {
    const [modal, setModal] = useState(false)

    const saveHandler = value => {
        onSave(title.id, value)
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
            <Button title="Назад" onPress={() => closeModal(null)} color="orange" />
            <Button title="Удалить" onPress={() => onRemove(title.id)} color="red" />
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