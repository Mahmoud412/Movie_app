import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { apiSlice } from './api/apiSlice'
import favoritReducer from './features/favoritSlice'

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedFavsReducer = persistReducer(persistConfig, favoritReducer)


export const store = configureStore({
    reducer: {
      // Add the generated reducer as a specific top-level slice
      favorit: persistedFavsReducer,
      [apiSlice.reducerPath]: apiSlice.reducer,
      // favorit :  favoritReducer,

       
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  })


  export const persistor = persistStore(store)

  setupListeners(store.dispatch)