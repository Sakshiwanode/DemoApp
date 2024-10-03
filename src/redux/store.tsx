import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from './ProductSlice';

import { setupListeners } from "@reduxjs/toolkit/query";
import { getApiCall } from "../services/GetApiCall";




export const store =configureStore({
    reducer:{
        product: ProductReducer,
        [getApiCall.reducerPath]: getApiCall.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(getApiCall.middleware),
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);
