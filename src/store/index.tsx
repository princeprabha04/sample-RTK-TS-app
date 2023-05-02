import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { CurriedGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import {postReducer} from './postSlice'

// Combine reducers
const rootReducer = combineReducers({
    posts:postReducer
})

const middleware =(getDefaultMiddleware: (arg0: { thunk: { extraArgument: any; }; serializableCheck: boolean; }) => any) =>
getDefaultMiddleware({
  thunk: {
    extraArgument: false,
  },
  serializableCheck: false,
});
// Create Store equivalent
const store = configureStore({
    reducer:rootReducer,
    middleware,
  });

  export default store;
  export type RootState = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  