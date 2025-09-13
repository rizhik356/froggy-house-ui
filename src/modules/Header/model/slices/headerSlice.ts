import { createSlice } from '@reduxjs/toolkit'
import { sliceInitialValues } from '../../constants/initialValues.ts'

const headerSlice = createSlice({
  name: 'header',
  initialState: sliceInitialValues,
  reducers: {
    setCollapsed: (state) => {
      state.isCollapsed = !state.isCollapsed
    },
  },
})

export const headerActions = headerSlice.actions

export default headerSlice.reducer
