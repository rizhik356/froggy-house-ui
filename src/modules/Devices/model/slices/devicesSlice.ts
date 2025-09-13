import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { devicesSLiceInitialValues } from '../../constants/initialValues.ts'
import type { DeviceData } from '../types/DevicesTypes.ts'

const devicesSlice = createSlice({
  name: 'devices',
  initialState: devicesSLiceInitialValues,
  reducers: {
    setDevices: (state, action: PayloadAction<Array<DeviceData>>) => {
      state.devices = action.payload
    },
    startUpdateDevices: (state) => {
      state.devicesUpdate = true
    },
    finishUpdateDevices: (state) => {
      state.devicesUpdate = false
    },
    resetAll: () => devicesSLiceInitialValues,
  },
})

export const devicesActions = devicesSlice.actions

export default devicesSlice.reducer
