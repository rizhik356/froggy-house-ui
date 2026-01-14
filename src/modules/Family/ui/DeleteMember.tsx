import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../../app/hooks/storeHooks.ts'
import { deleteMemberActions } from '../model/slices/deleteMemberSlice.ts'
import { deleteMember } from '../model/api/deleteMember.ts'
import { errorNotification } from '../../../shared/ui/Notifications'
import { familyActions } from '../model/slices/familySlice.ts'

const DeleteMember = () => {
  const dispatch = useDispatch()
  const { confirmModalOpened, deleteLoading, deleteMemberInfo } =
    useAppSelector((state) => state.deleteMember)
  const { family } = useAppSelector((state) => state.family)

  const handleClose = () => {
    dispatch(deleteMemberActions.setConfirmModalClosed())
    dispatch(deleteMemberActions.setDeleteMemberInfo(null))
  }

  const handleDeleteClick = () => {
    if (deleteMemberInfo && family) {
      dispatch(deleteMemberActions.startDeleteLoading())
      deleteMember({ userId: deleteMemberInfo.user.id, familyId: family.id })
        .then(() => {
          dispatch(familyActions.startUpdate())
          dispatch(deleteMemberActions.setConfirmModalClosed())
        })
        .catch(errorNotification)
        .finally(() => {
          dispatch(deleteMemberActions.endDeleteLoading())
        })
    }
  }

  return (
    <>
      <Dialog
        open={confirmModalOpened}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Удаление пользователя'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Вы действительно хотите удалить пользователя{' '}
            {deleteMemberInfo?.user?.login} ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Нет</Button>
          <Button loading={deleteLoading} onClick={handleDeleteClick} autoFocus>
            Да
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DeleteMember
