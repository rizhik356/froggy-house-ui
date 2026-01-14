import { Box } from '@mui/material'
import styles from '../scss/styles.module.scss'

import AddNewFamilyMember from './AddNewFamilyMember.tsx'
import { useEffect, useMemo, useState } from 'react'
import { getFamilies } from '../model/api/getFamilies.ts'
import { useDispatch } from 'react-redux'
import { familyActions } from '../model/slices/familySlice.ts'
import { errorNotification } from '../../../shared/ui/Notifications'
import { useAppSelector } from '../../../app/hooks/storeHooks.ts'
import MemberCard from './MemberCard.tsx'
import DeleteMember from './DeleteMember.tsx'

const FamilyMain = () => {
  const dispatch = useDispatch()
  const { family, update } = useAppSelector((state) => state.family)
  const tokenData = useAppSelector((state) => state.auth.tokenData)
  const [isOwner, setIsOwner] = useState<boolean>(false)

  useEffect(() => {
    dispatch(familyActions.startUpdate())
  }, [])

  useEffect(() => {
    if (update) {
      getFamilies()
        .then((data) => {
          dispatch(familyActions.setFamily(data))
        })
        .catch(errorNotification)
        .finally(() => {
          dispatch(familyActions.endUpdate())
        })
    }
  }, [update])

  const renderMembers = useMemo(() => {
    if (family && tokenData) {
      const isUserIdOwner = family.ownerId === tokenData.id
      setIsOwner(isUserIdOwner)
      return family.members.map((item, index) => {
        return (
          <MemberCard memberInfo={item} key={index} isOwner={isUserIdOwner} />
        )
      })
    }
  }, [family, tokenData])

  return (
    <Box className={styles.main_container}>
      {isOwner && <AddNewFamilyMember />}
      <DeleteMember />
      <Box className={styles.inner_container}>{renderMembers}</Box>
    </Box>
  )
}

export default FamilyMain
