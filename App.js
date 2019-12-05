import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import Navbar from './src/components/Navbar'
import { MainScreen } from './src/screens/MainScreen'
import { TodoScreen } from './src/screens/TodoScreen'
export default function App() {
  const [todoId, setTodoId] = useState(null)
  const [todos, setTodos] = useState([])

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title
    }
    setTodos(prevTodos => [...prevTodos, newTodo])
  }

  const openWindow = id => {
    setTodoId(id)
  }

  const removeTodo = id => {
    Alert.alert(
      'Удаление эелемента',
      'Уверены что хотите удалить?',
      [
        {
          text: 'Отмена',
          style: 'cancel',
        },
        {text: 'Удалить', onPress: () => {
          setTodoId(null);
          setTodos(prev => prev.filter(todo => todo.id !== id))
        }},
      ],
      {cancelable: false},
    );
  }

  const updateTodo = (id, title) => {
    setTodos(prev => {
      return prev.map(todo => {
        if(todo.id === id) {
          todo.title = title
        }
        return todo
      })
    })
  }

  let content;

  if(!todoId) {
    content = <MainScreen todos={todos} removeTodo={removeTodo} addTodo={addTodo} openWindow={openWindow} />
  } else {
    const title = todos.find(todo => todo.id === todoId)
    content = <TodoScreen closeModal={openWindow} title={title} onRemove={removeTodo} onSave={updateTodo} />
  }
  
  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.paddings}>
      {content}
      </View>
    </View>
  );
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
