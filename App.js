import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Navbar from './src/components/Navbar'
import { MainScreen } from './src/screens/MainScreen'
export default function App() {
  const [todoId, setTodoId] = useState(null)
  const [todos, setTodos] = useState([
    { id: 0, title: 'Дело 1' },
    { id: 1, title: 'Дело 2' },
    { id: 2, title: 'Дело 14' },
    { id: 3, title: 'Дело 12' },
    { id: 4, title: 'Дело 11' },
    { id: 5, title: 'Дело 112' },
    { id: 6, title: 'Дело 1фы' },
    { id: 7, title: 'Дело 1123' },
    { id: 8, title: 'Дело 151' },
  ])

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title
    }
    setTodos(prevTodos => [...prevTodos, newTodo])
  }

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  let content = <MainScreen todos={todos} removeTodo={removeTodo} addTodo={addTodo} />

  
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
