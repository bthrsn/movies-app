import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import {rootReducer} from "./reducers/rootReducer"
import {rootWatcher} from "./saga";

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootWatcher)

export type AppDispatch = typeof store.dispatch;
