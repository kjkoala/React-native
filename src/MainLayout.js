import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import Navbar from './components/Navbar'
import { MainScreen } from './screens/MainScreen'
import { TodoScreen } from './screens/TodoScreen'
import { ScreenContext } from './context/screen/screenContext'
import { TodoContext } from './context/todo/TodoContext'

export const MainLayout = () => {
    const { todoId } = useContext(ScreenContext)
    let content;

    if (!todoId) {
        content = <MainScreen />
    } else {
        content = <TodoScreen />
    }
    return (
        <View style={styles.container}>
            <Navbar />
            <View style={styles.paddings}>
                {content}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    paddings: {
        paddingHorizontal: 30,
        paddingVertical: 20
    }
});