import styles from '../scss/styles.module.scss'
import { Step, StepLabel, Stepper } from '@mui/material'
import { useLocation, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { authActions } from '../model/store/authSlice.ts'
import { signUpSteps } from '../constants/signUpSteps.tsx'
import { useAppSelector } from '../../../app/hooks/storeHooks.ts'

const SignUp = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { step } = useAppSelector((state) => state.auth)
  const location = useLocation()

  useEffect(() => {
    if (id) {
      dispatch(authActions.setCurrentStep(Number(id)))
    }
  }, [location])

  return (
    <>
      <div className={styles.stepper_container}>
        <Stepper style={{ width: '100%' }}>
          {signUpSteps.map((_, index) => {
            return (
              <Step completed={index < step - 1} active={index === step - 1}>
                <StepLabel>{''}</StepLabel>
              </Step>
            )
          })}
        </Stepper>
        {signUpSteps[step - 1].component}
      </div>
    </>
  )
}

export default SignUp
