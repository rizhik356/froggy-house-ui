import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { devicesSLiceInitialValues } from '../../constants/initialValues.ts'
import type { DeviceData, OutputData } from '../types/DevicesTypes.ts'
import type { PatchedData } from '../types/AddNewDeviceTypes.ts'

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
    setDeviceModalOpened: (state) => {
      state.deviceModalOpened = true
    },
    setDeviceModalClosed: (state) => {
      state.deviceModalOpened = false
    },
    setDeviceIdClicked: (state, action: PayloadAction<number>) => {
      state.deviceIdClicked = action.payload
    },
    setNewOutputData: (state, action: PayloadAction<OutputData>) => {
      state.newOutputData = action.payload
    },
    resetNewOutputData: (state) => {
      state.newOutputData = devicesSLiceInitialValues.newOutputData
    },
    setPatchedData: (state, action: PayloadAction<PatchedData>) => {
      state.patchedData = action.payload
    },
    setFormOpen: (state) => {
      state.formOpened = true
    },
    setFormClosed: (state) => {
      state.formOpened = false
      state.patchedData = devicesSLiceInitialValues.patchedData
      state.newOutputData = devicesSLiceInitialValues.newOutputData
    },
    resetAll: () => devicesSLiceInitialValues,
  },
})

export const devicesActions = devicesSlice.actions

export default devicesSlice.reducer
