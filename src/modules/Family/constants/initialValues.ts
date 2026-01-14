import type { State } from '../model/types/AddMemberTypes.ts'
import type { FamilyState } from '../model/types/FamilyTypes.ts'
import type { DeleteMemberState } from '../model/types/DeleteMemberTypes.ts'

export const addMemberSliceInitialValues: State = {
  modalOpened: false,
}

export const familySliceInitialValues: FamilyState = {
  family: null,
  mainLoading: false,
  update: false,
}

export const deleteMemberSliceInitialValue: DeleteMemberState = {
  confirmModalOpened: false,
  deleteLoading: false,
}
