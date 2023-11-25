import { combineReducers, configureStore } from "@reduxjs/toolkit";
import appSlice from "./reducers/appSlice";
import coinSlice from "./reducers/coinSlice";
import historySlice from "./reducers/historySlice";
import detailsSlice from "./reducers/detailsSlice";
import exchangesSlice from "./reducers/exchangesSlice";

const RootReducer = combineReducers({
  app: appSlice,
  coins: coinSlice,
  history: historySlice,
  details: detailsSlice,
  exchanges: exchangesSlice,
});

export const store = configureStore({
  reducer: RootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
