import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { authTokenMiddleware } from '../../modules/Auth'
import { authReducer } from '../../modules/Auth'

const rootReducer = combineReducers({
  auth: authReducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authTokenMiddleware),
})

export { store }

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
