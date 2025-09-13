import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { authTokenMiddleware } from '../../modules/Auth'
import { authReducer } from '../../modules/Auth'
import { addDeviceReducer, devicesReducer } from '../../modules/Devices'
import { headerReducer } from '../../modules/Header'

const rootReducer = combineReducers({
  auth: authReducer,
  addDevice: addDeviceReducer,
  devices: devicesReducer,
  header: headerReducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authTokenMiddleware),
})

export { store }

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
