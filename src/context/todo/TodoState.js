import React, { useReducer, useContext } from 'react'
import { TodoContext } from './TodoContext'
import todoReducer from './todoReducer'
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO, SHOW_LOADER, HIDE_LOADER, SHOW_ERROR, CLEAN_ERROR } from '../types'
import { ScreenContext } from '../screen/screenContext'
import { FETCH_TODO } from '../types'

export const TodoState = ({ children }) => {
    const initialState = {
        todos: [],
        loading: false,
        error: null
    }
    const { changeScreen } = useContext(ScreenContext)
    const [state, dispatch] = useReducer(todoReducer, initialState)

    const addTodo = title => {
        fetch('https://book-fea1a.firebaseio.com/todos.json', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title })
        })
            .then((res) => res.json())
            .then((res) => dispatch({ type: ADD_TODO, title, id: res.name }))
    }

    const removeTodo = id => {
        changeScreen(null)
        dispatch({ type: REMOVE_TODO, id })
    }

    const fetchTodos = () =>
        fetch('https://book-fea1a.firebaseio.com/todos.json', {
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(res => Object.keys(res).map(key => ({ ...res[key], id: key })))
            .then(res => dispatch({ type: FETCH_TODO, todos: res }))


    const showLoader = () => dispatch({ type: SHOW_LOADER })

    const hideLoader = () => dispatch({ type: HIDE_LOADER })

    const showError = error => dispatch({ type: SHOW_ERROR, error })

    const clearError = () => dispatch({ type: CLEAN_ERROR })

    const updateTodo = (id, title) => dispatch({ type: UPDATE_TODO, id, title })
    return <TodoContext.Provider value={{
        todos: state.todos,
        fetchTodos,
        addTodo,
        removeTodo,
        updateTodo,
        loading: state.loading,
        error: state.error
    }}>{children}</TodoContext.Provider>
}
