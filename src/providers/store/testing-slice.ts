import { createSelector, createSlice } from '@reduxjs/toolkit';

export const testSlice = createSlice({
    name: 'test',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
});

const selector = createSelector(
    (store) => store.test.value,
    (value) => value * value,
);
export const { increment, decrement } = testSlice.actions;
