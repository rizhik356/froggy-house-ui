import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { serviceSliceInitialValues } from '../../../constants/initialValues.ts'
import type { ServicesData, State } from '../../../shared/types/serviceTypes.ts'

const serviceSlice = createSlice({
  name: 'service',
  initialState: serviceSliceInitialValues,
  reducers: {
    setServiceData: (state: State, action: PayloadAction<ServicesData>) => {
      return { ...state, ...action.payload }
    },
  },
})

export const serviceActions = serviceSlice.actions

export default serviceSlice.reducer
