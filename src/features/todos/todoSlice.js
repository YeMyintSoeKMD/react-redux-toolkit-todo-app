import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [
            {id:1, title: 'wake up', done: true},
            {id:2, title: 'have breakfast', done: true},
            {id:3, title: 'change dress', done: true},
            {id:4, title: 'go to work', done: false},
        ]
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos = [...state.todos, action.payload]         
        },
        deleteTodo: (state, action) => {
            if(window.confirm('are you sure to delete?')) {
                state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            }
        },
        doneTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if(todo.id === action.payload) {
                    return {...todo, done: !todo.done}
                }
                return todo
            })
        }
    }
})
export const { addTodo, deleteTodo, doneTodo } = todoSlice.actions
export default todoSlice.reducer