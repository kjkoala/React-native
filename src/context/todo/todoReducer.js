import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "../types";

export default (state, actions) => {
    switch (actions.type) {
        case ADD_TODO:
            return {...state, todos: [...state.todos, {id: Date.now().toString(), title: actions.title}]}
        case REMOVE_TODO:
            return {...state, todos: state.todos.filter(todo => todo.id !== actions.id)}
        case UPDATE_TODO:
            return {...state, todos: state.todos.map(todo => {
                if(todo.id === actions.id) todo.title = actions.title
                return todo
            })}
        default:
            return state
    }
}
