import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TTodo {
    task: string;
    description: string;
    id: string;
    isCompleted: boolean;
}

type TInitialState = {
    todos: TTodo[]
}

console.log('object');

console.log('object');

const initialState: TInitialState = { todos: [] };

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TTodo>) => {
            state.todos.push(action.payload);
        },

        removeTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },

        toggleIsCompleted: (state, action: PayloadAction<string>) => {
            const task = state.todos.find((item) => item.id === action.payload);
            task!.isCompleted = !task?.isCompleted;
        },

        updateTodo: (state, action) => {
            const task = state.todos.find((item) => item.id === action.payload.id);
            task!.task = action.payload.task;
            task!.description = action.payload.description;
        }

    }

});

export const { addTodo, removeTodo, toggleIsCompleted, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;