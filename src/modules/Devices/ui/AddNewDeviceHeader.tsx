import {
  AppBar,
  IconButton,
  Stepper,
  Toolbar,
  Typography,
  Step,
  StepLabel,
  Box,
} from '@mui/material'
import styles from '../scss/styles.module.scss'
import CloseIcon from '@mui/icons-material/Close'
import type { Props } from '../model/types/AddNewDeviceTypes.ts'
import { useState } from 'react'
import { addNewModalSteps } from '../constants/AddNewModalSteps.tsx'
import Step1 from './AddNewDeviceSteps/Step1.tsx'

const AddNewDeviceHeader = ({ onClick }: Props) => {
  const [activeStep, setActiveStep] = useState<number>(0)

  const isStepSkipped = (step: number) => {
    return step < activeStep
  }

  const setNewActiveStep = (activeStep: number) => {
    setActiveStep(activeStep)
  }

  return (
    <Box>
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar className={styles.header}>
          <Typography variant={'h6'}>Добавление нового устройства</Typography>
          <IconButton color="inherit" onClick={onClick} aria-label="close">
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box className={styles.steps_container}>
        <Stepper>
          {addNewModalSteps.map((_item, index) => {
            return (
              <Step key={index} completed={isStepSkipped(index)}>
                <StepLabel>{''}</StepLabel>
              </Step>
            )
          })}
        </Stepper>
        <Step1 />
      </Box>
    </Box>
  )
}

export default AddNewDeviceHeader
