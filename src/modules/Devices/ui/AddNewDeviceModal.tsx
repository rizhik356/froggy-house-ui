import { Dialog, Fab, Slide, Box } from '@mui/material'
import styles from '../scss/styles.module.scss'
import AddIcon from '@mui/icons-material/Add'
import { useState } from 'react'
import type { TransitionProps } from '@mui/material/transitions'
import React from 'react'
import AddNewDeviceHeader from './AddNewDeviceHeader.tsx'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const AddNewDeviceModal = () => {
  const [open, setOpen] = useState<boolean>(false)

  const handleFabClick = () => {
    setOpen(true)
  }

  const handleClose = () => setOpen(false)

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
