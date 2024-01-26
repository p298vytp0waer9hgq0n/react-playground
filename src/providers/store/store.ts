import { configureStore } from '@reduxjs/toolkit';

import { testSlice } from './testing-slice';

export const store = configureStore({
    reducer: testSlice.reducer,
});
