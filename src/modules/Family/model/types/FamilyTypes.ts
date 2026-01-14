export type FamilyState = {
  family: Family | null
  mainLoading: boolean
  update: boolean
}

export type Member = {
  member: {
    id: number
    name: string
  }
  user: {
    id: number
    email: string
    login: string
  }
}

export type Family = {
  id: number
  name: string
  ownerId: number
  members: Member[]
}

export type MemberCardProps = {
  memberInfo: Member
  isOwner: boolean
}
