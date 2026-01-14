import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { familySliceInitialValues } from '../../constants/initialValues.ts'
import type { Family, FamilyState } from '../types/FamilyTypes.ts'

const familySlice = createSlice({
  name: 'family',
  initialState: familySliceInitialValues,
  reducers: {
    setFamily: (state: FamilyState, action: PayloadAction<Family>) => {
      state.family = action.payload
    },
    startFamilyLoading: (state: FamilyState) => {
      state.mainLoading = true
    },
    endFamilyLoading: (state: FamilyState) => {
      state.mainLoading = false
    },
    startUpdate: (state: FamilyState) => {
      state.update = true
    },
    endUpdate: (state: FamilyState) => {
      state.update = false
    },
  },
})

export const familyActions = familySlice.actions

export default familySlice.reducer
