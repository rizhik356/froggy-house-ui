import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { addDeviceSLiceInitialValue } from '../../constants/initialValues.ts'
import type { ServicesData } from '../types/AddNewDeviceTypes.ts'

const addDeviceSlice = createSlice({
  name: 'addDevice',
  initialState: addDeviceSLiceInitialValue,
  reducers: {
    setServiceData: (state, action: PayloadAction<ServicesData>) => {
      state.servicesData = action.payload
    },
  },
})

export const addDeviceActions = addDeviceSlice.actions

export default addDeviceSlice.reducer
