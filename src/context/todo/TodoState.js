import React, { useReducer } from 'react'

import { TodoContext } from './TodoContext'

export const TodoState = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState, init)
    return <TodoContext.Provider value={{}}>{children}</TodoContext.Provider>
}
