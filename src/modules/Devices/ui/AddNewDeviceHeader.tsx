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
import { addNewModalSteps } from '../constants/AddNewModalSteps.tsx'
import { useAppSelector } from '../../../app/hooks/storeHooks.ts'

const AddNewDeviceHeader = ({ onClick }: Props) => {
  const { step } = useAppSelector((state) => state.addDevice)

  const isStepSkipped = (newStep: number) => {
    return newStep < step
  }

  return (
    <>
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
              <Step
                key={index}
                completed={isStepSkipped(index)}
                active={index === step}
              >
                <StepLabel>{''}</StepLabel>
              </Step>
            )
          })}
        </Stepper>
        {addNewModalSteps[step].component}
      </Box>
    </>
  )
}

export default AddNewDeviceHeader
