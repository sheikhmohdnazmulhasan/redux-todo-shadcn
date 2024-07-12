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
        }
    }

});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;