import { Dialog, Fab, Slide, Box } from '@mui/material'
import styles from '../scss/styles.module.scss'
import AddIcon from '@mui/icons-material/Add'
import { useEffect } from 'react'
import type { TransitionProps } from '@mui/material/transitions'
import React from 'react'
import AddNewDeviceHeader from './AddNewDeviceHeader.tsx'
import { useDispatch } from 'react-redux'
import { addDeviceActions } from '../model/slices/addDeviceSlice.ts'
import { useAppSelector } from '../../../app/hooks/storeHooks.ts'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const AddNewDeviceModal = () => {
  const dispatch = useDispatch()
  const open = useAppSelector((state) => state.addDevice.modalOpened)

  useEffect(() => {
    if (!open) {
      dispatch(addDeviceActions.resetAll())
    }
  }, [open])

  const handleFabClick = () => {
    dispatch(addDeviceActions.setModalOpened())
  }

  const handleClose = () => dispatch(addDeviceActions.setModalClosed())

  return (
    <>
      {!open && (
        <Fab
          color="primary"
          aria-label="add"
          className={styles.fab}
          onClick={handleFabClick}
        >
          <AddIcon />
        </Fab>
      )}
      <Dialog
        open={open}
        fullScreen
        onClose={handleClose}
        slots={{
          transition: Transition,
        }}
      >
        <Box className={styles.container}>
          <AddNewDeviceHeader onClick={handleClose} />
        </Box>
      </Dialog>
    </>
  )
}

export default AddNewDeviceModal
