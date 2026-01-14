import type { Member } from './FamilyTypes.ts'

export type DeleteMemberState = {
  confirmModalOpened: boolean
  deleteLoading: boolean
  deleteMemberInfo: Member | null
}

export type DeleteMemberParams = {
  userId: number
  familyId: number
}
