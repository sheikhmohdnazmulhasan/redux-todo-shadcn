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
        },

        toggleIsCompleted: (state, action: PayloadAction<string>) => {
            const task = state.todos.find((item) => item.id === action.payload);
            task!.isCompleted = !task?.isCompleted;
        }

    }

});

export const { addTodo, removeTodo, toggleIsCompleted } = todoSlice.actions;
export default todoSlice.reducer;