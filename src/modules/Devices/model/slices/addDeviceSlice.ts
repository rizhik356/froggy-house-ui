import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { addDeviceSLiceInitialValue } from '../../constants/initialValues.ts'

const addDeviceSlice = createSlice({
  name: 'addDevice',
  initialState: addDeviceSLiceInitialValue,
  reducers: {
    setDeviceToken: (state, action: PayloadAction<string>) => {
      state.deviceToken = action.payload
      state.step += 1
    },
    setModalOpened: (state) => {
      state.modalOpened = true
    },
    setModalClosed: (state) => {
      state.modalOpened = false
    },
    setNextStep: (state) => {
      state.step += 1
    },
    resetAll: () => addDeviceSLiceInitialValue,
  },
})

export const addDeviceActions = addDeviceSlice.actions

export default addDeviceSlice.reducer
