import { configureStore } from '@reduxjs/toolkit';

import { testSlice } from './testing-slice';

const store = configureStore({
    reducer: testSlice.reducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
