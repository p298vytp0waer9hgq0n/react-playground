import type { PayloadAction } from '@reduxjs/toolkit';
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
        replace: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        },
    },
});

export const selector = createSelector(
    (store) => store.test.value,
    (value) => value * value,
);

export const { increment, decrement } = testSlice.actions;
export default testSlice.reducer;
