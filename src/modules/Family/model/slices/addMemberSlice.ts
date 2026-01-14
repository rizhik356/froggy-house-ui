import { createSlice } from '@reduxjs/toolkit'
import { addMemberSliceInitialValues } from '../../constants/initialValues.ts'
import type { State } from '../types/AddMemberTypes.ts'

const addMemberSlice = createSlice({
  name: 'addFamilyMember',
  initialState: addMemberSliceInitialValues,
  reducers: {
    setModalOpened: (state: State) => {
      state.modalOpened = true
    },
    setModalClosed: (state: State) => {
      state.modalOpened = false
    },
  },
})

export const addMemberActions = addMemberSlice.actions

export default addMemberSlice.reducer
