import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { deleteMemberSliceInitialValue } from '../../constants/initialValues.ts'
import type { DeleteMemberState } from '../types/DeleteMemberTypes.ts'

const deleteMemberSlice = createSlice({
  name: 'deleteMember',
  initialState: deleteMemberSliceInitialValue,
  reducers: {
    setConfirmModalOpened: (state: DeleteMemberState) => {
      state.confirmModalOpened = true
    },
    setConfirmModalClosed: (state: DeleteMemberState) => {
      state.confirmModalOpened = false
    },
    startDeleteLoading: (state: DeleteMemberState) => {
      state.deleteLoading = true
    },
    endDeleteLoading: (state: DeleteMemberState) => {
      state.deleteLoading = false
    },
    setDeleteMemberInfo: (
      state: DeleteMemberState,
      action: PayloadAction<DeleteMemberState['deleteMemberInfo']>,
    ) => {
      state.deleteMemberInfo = action.payload
    },
  },
})

export const deleteMemberActions = deleteMemberSlice.actions

export default deleteMemberSlice.reducer
