import styles from '../scss/styles.module.scss'
import {
  Typography,
  Box,
  TextField,
  Button,
  IconButton,
  InputAdornment,
} from '@mui/material'
import { useFormik } from 'formik'
import { loginInitialValues } from '../constants/inititalValues.ts'
import { loginSchema } from '../model/schemas/validationSchemas.ts'
import type { LoginFormValues } from '../model/types/LoginTypes.ts'
import { loginFormValuesNormalize } from '../helpers/loginFormValuesNormalize.ts'
import postLoginData from '../api/postLoginData.ts'
import { useState } from 'react'
import { errorNotification } from '../../../shared/ui/Notifications'
import { useDispatch } from 'react-redux'
import { authActions } from '../model/store/authSlice.ts'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const dispatch = useDispatch()

  const handleSubmit = (values: LoginFormValues) => {
    setLoading(true)
    const normalizeValues = loginFormValuesNormalize(values)
    postLoginData(normalizeValues)
      .then((data) => dispatch(authActions.setTokens(data)))
      .catch((error) => errorNotification(error))
      .finally(() => setLoading(false))
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const form = useFormik({
    initialValues: loginInitialValues,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      handleSubmit(values)
    },
  })

  return (
    <div className={styles.form_container}>
      <div className={styles.actions_container}>
        <Typography variant={'h2'}>Вход</Typography>
        <div className={styles.actions}>
          <Typography variant={'body2'}>Забыли пароль</Typography>
          <Typography variant={'body2'}>&nbsp;/&nbsp;</Typography>
          <Typography variant={'body2'}>Регистрация</Typography>
        </div>
      </div>
      <Box
        component="form"
        className={styles.form}
        onSubmit={form.handleSubmit}
      >
        <TextField
          size={'small'}
          value={form.values.login}
          name={'login'}
          onChange={form.handleChange}
          fullWidth
          label="Логин"
          error={form.touched.login && Boolean(form.errors.login)}
          helperText={form.touched.login && form.errors.login}
          onBlur={form.handleBlur}
        />
        <TextField
          size={'small'}
          value={form.values.password}
          name={'password'}
          onChange={form.handleChange}
          fullWidth
          label={'Пароль'}
          type={showPassword ? 'text' : 'password'}
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
        <Button
          loading={loading}
          size={'large'}
          type={'submit'}
          variant={'contained'}
        >
          Войти
        </Button>
      </Box>
    </div>
  )
}

export default Login
