import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts";
import authReducer from "../redux/auth/auth-reduser";
import logger from "redux-logger";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfigs = {
  key: "token",
  storage,
  whitelist: ["token"],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: persistReducer(authPersistConfigs, authReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);

// export default {store, persistor};
