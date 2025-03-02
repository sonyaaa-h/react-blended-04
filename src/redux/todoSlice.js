import { createSelector, createSlice } from '@reduxjs/toolkit';
import { selectFilter } from './filterSlise';

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        items: [],
    },
    reducers: {
        addTodo(state, action) {
            state.items.push(action.payload);
        },
        deleteTodo(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
    },
});

export const selectTodos = state => state.todos.items;

export const selectFilteredTodos = createSelector(
    [selectFilter, selectTodos],
    (filter, todos) =>
        todos.filter(todo =>
            todo.text.toLowerCase().includes(filter.toLowerCase()),
        ),
);

export const todoReducer = todoSlice.reducer;
