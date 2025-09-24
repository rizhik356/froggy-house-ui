import styles from '../scss/styles.module.scss'
import { Step, StepLabel, Stepper } from '@mui/material'
import { useLocation, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { authActions } from '../model/store/authSlice.ts'
import { useAppSelector } from '../../../app/hooks/storeHooks.ts'
import { resetPasswordSteps } from '../constants/resetPasswordSteps.tsx'

const ResetPassword = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { currentPasswordResetStep } = useAppSelector((state) => state.auth)
  const location = useLocation()

  useEffect(() => {
    if (id) {
      dispatch(authActions.setCurrentPasswordResetStep(Number(id)))
    }
  }, [location])

  return (
    <>
      <div className={styles.stepper_container}>
        <Stepper style={{ width: '100%' }}>
          {resetPasswordSteps.map((_, index) => {
            return (
              <Step
                completed={index < currentPasswordResetStep - 1}
                active={index === currentPasswordResetStep - 1}
              >
                <StepLabel>{''}</StepLabel>
              </Step>
            )
          })}
        </Stepper>
        {resetPasswordSteps[currentPasswordResetStep - 1].component}
      </div>
    </>
  )
}

export default ResetPassword
