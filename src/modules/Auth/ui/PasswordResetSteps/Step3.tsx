import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material'
import styles from '../../scss/styles.module.scss'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Visibility from '@mui/icons-material/Visibility'
import { useFormik } from 'formik'
import { passwordResetStep3InitialValues } from '../../constants/inititalValues.ts'
import { useState } from 'react'
import type { PasswordResetStep3FormValues } from '../../model/types/PasswordResetTypes.ts'
import postNewPassword from '../../api/postNewPassword.ts'
import { useNavigate } from 'react-router-dom'
import { paths } from '../../../../constants'
import { errorNotification } from '../../../../shared/ui/Notifications'
import { passwordResetStep3Schema } from '../../model/schemas/validationSchemas.ts'
import successNotification from '../../../../shared/ui/Notifications/sucessNotification.ts'

const Step3 = () => {
  const [showPassword, setShowPassword] = useState<boolean>(true)
  const [showConfirmPassword, setShowPasswordConfirm] = useState<boolean>(true)
  const [loading, setLoading] = useState<boolean>(false)
  const navigate = useNavigate()

  const handleFinish = ({ password }: PasswordResetStep3FormValues) => {
    setLoading(true)
    postNewPassword({ password })
      .then(({ message }) => {
        successNotification(message)
        navigate(paths.MAIN)
      })
      .catch(errorNotification)
      .finally(() => setLoading(false))
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleClickShowConfirmPassword = () => {
    setShowPasswordConfirm(!showConfirmPassword)
  }

  const form = useFormik({
    initialValues: passwordResetStep3InitialValues,
    onSubmit: handleFinish,
    validationSchema: passwordResetStep3Schema,
  })

  return (
    <Box
      component={'form'}
      className={styles.form}
      onSubmit={form.handleSubmit}
    >
      <TextField
        className={styles.input}
        size={'small'}
        value={form.values.password}
        name={'password'}
        onChange={form.handleChange}
        fullWidth
        type={showPassword ? 'text' : 'password'}
        label="Пароль"
        error={form.touched.password && Boolean(form.errors.password)}
        helperText={form.touched.password && form.errors.password}
        onBlur={form.handleBlur}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? 'Скрыть пароль' : 'Показать пароль'
                  }
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
      <TextField
        className={styles.input}
        size={'small'}
        value={form.values.confirmPassword}
        name={'confirmPassword'}
        onChange={form.handleChange}
        fullWidth
        type={showConfirmPassword ? 'text' : 'password'}
        label="Подтверждение пароля"
        error={
          form.touched.confirmPassword && Boolean(form.errors.confirmPassword)
        }
        helperText={form.touched.confirmPassword && form.errors.confirmPassword}
        onBlur={form.handleBlur}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showConfirmPassword ? 'Скрыть пароль' : 'Показать пароль'
                  }
                  onClick={handleClickShowConfirmPassword}
                  edge="end"
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
      <Button
        size={'large'}
        loading={loading}
        type={'submit'}
        fullWidth={true}
        variant={'contained'}
      >
        Далее
      </Button>
    </Box>
  )
}

export default Step3
