import {
  AppBar,
  Box,
  Dialog,
  Fab,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import styles from '../scss/styles.module.scss'
import AddIcon from '@mui/icons-material/Add'
import { useAppSelector } from '../../../app/hooks/storeHooks.ts'
import { useDispatch } from 'react-redux'
import { addMemberActions } from '../model/slices/addMemberSlice.ts'
import CloseIcon from '@mui/icons-material/Close'

const AddNewFamilyMember = () => {
  const dispatch = useDispatch()
  const { modalOpened } = useAppSelector((state) => state.addMember)

  const handleFabClick = () => {
    dispatch(addMemberActions.setModalOpened())
  }

  const handleClose = () => {
    dispatch(addMemberActions.setModalClosed())
  }

  return (
    <>
      <Fab
        color="primary"
        aria-label="add"
        className={styles.fab}
        onClick={handleFabClick}
      >
        <AddIcon />
      </Fab>

      {
        <Dialog open={modalOpened} onClose={handleClose}>
          <Box className={styles.add_member_modal}>
            <AppBar sx={{ position: 'relative' }}>
              <Toolbar className={styles.header}>
                <Typography variant={'h6'}>
                  Добавление нового члена семьи
                </Typography>
                <IconButton
                  color="inherit"
                  onClick={handleClose}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
          </Box>
        </Dialog>
      }
    </>
  )
}

export default AddNewFamilyMember
