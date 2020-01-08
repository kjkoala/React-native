import { ADD_TODO, REMOVE_TODO, UPDATE_TODO, SHOW_LOADER, HIDE_LOADER, CLEAN_ERROR, SHOW_ERROR, FETCH_TODO } from "../types";

export default (state, actions) => {
    switch (actions.type) {
        case ADD_TODO:
            return {...state, todos: [...state.todos, {id: actions.id, title: actions.title}]}
        case REMOVE_TODO:
            return {...state, todos: state.todos.filter(todo => todo.id !== actions.id)}
        case UPDATE_TODO:
            return {...state, todos: state.todos.map(todo => {
                if(todo.id === actions.id) todo.title = actions.title
                return todo
            })}
        case SHOW_LOADER:
            return {...state, loading: true}
        case HIDE_LOADER:
            return {...state, loading: false}
        case CLEAN_ERROR:
            return {...state, error: null}
        case SHOW_ERROR:
            return {...state, error}
        case FETCH_TODO:
            return {...state, todos: actions.todos}
        default:
            return state
    }
}
