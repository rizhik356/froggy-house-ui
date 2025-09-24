import {
  Box,
  Button,
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material'
import { useFormik } from 'formik'
import { signUp1StepInitialValues } from '../../constants/inititalValues.ts'
import styles from '../../scss/styles.module.scss'
import { useNavigate } from 'react-router-dom'
import { paths } from '../../../../constants'
import { isLoginEmpty } from '../../api/isLoginEmpty.ts'
import { errorNotification } from '../../../../shared/ui/Notifications'
import { useState } from 'react'
import { signupLoginSchema } from '../../model/schemas/validationSchemas.ts'
import AccountCircle from '@mui/icons-material/AccountCircle'
import LockIcon from '@mui/icons-material/Lock'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import { useDebounce } from '../../../../app/hooks/debounceHook.ts'
import { isEmailEmpty } from '../../api/isEmailEmpty.ts'
import { signUpEnum } from '../../constants/enums.ts'
import type { DebounceFunc, FormValues } from '../../model/types/SignUpTypes.ts'
import { formatSignUpData } from '../../utils/formatSignUpData.ts'
import { signUpPostFormData } from '../../api/signUpPostFormData.ts'
import Step1Actions from './Step1Actions.tsx'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Visibility from '@mui/icons-material/Visibility'

const Step1 = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState<boolean>(false)
  const [searchErrors, setSearchErrors] = useState({
    login: signUpEnum.DEFAULT,
    email: signUpEnum.DEFAULT,
  })
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  const createSearcher = (
    errorField: keyof typeof searchErrors,
    searchFunc: (value: string) => Promise<void>,
  ) => {
    return (value: string) => {
      setLoading(true)
      const formattedValue = value.trim().toLowerCase()

      searchFunc(formattedValue)
        .then(() => {
          setSearchErrors((prev) => ({
            ...prev,
            [errorField]: signUpEnum.SUCCESS,
          }))
        })
        .catch((error) => {
          if (error?.status === 409) {
            setSearchErrors((prev) => ({
              ...prev,
              [errorField]: signUpEnum.ERROR,
            }))
          }
          errorNotification(error)
        })
        .finally(() => setLoading(false))
    }
  }
  const loginSearch = createSearcher('login', isLoginEmpty)
  const emailSearch = createSearcher('email', isEmailEmpty)

  const loginDebounceFunc = useDebounce(loginSearch, 300)
  const emailDebounceFunc = useDebounce(emailSearch, 300)

  const debounceFuncs: DebounceFunc = {
    login: loginDebounceFunc,
    email: emailDebounceFunc,
  }

  const handleSubmit = (values: FormValues): void => {
    if (
      searchErrors.login === signUpEnum.SUCCESS &&
      searchErrors.email === signUpEnum.SUCCESS
    ) {
      setLoading(true)
      const formatValues = formatSignUpData(values)
      signUpPostFormData(formatValues)
        .then(() => {
          navigate(paths.AUTH.REGISTER + '/2')
        })
        .catch(errorNotification)
        .finally(() => setLoading(false))
    }
  }

  const form = useFormik({
    initialValues: signUp1StepInitialValues,
    onSubmit: handleSubmit,
    validationSchema: signupLoginSchema,
  })

  const handleChangeWithDebounce = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = target
    form.setFieldValue(name, value)

    signupLoginSchema.validateSyncAt(name, { [name]: value })
    if (value.trim() && name in debounceFuncs) {
      debounceFuncs[name](value)
    }
  }

  return (
    <>
      <Box
        component="form"
        className={styles.form}
        onSubmit={form.handleSubmit}
      >
        <TextField
          className={styles.input}
          size={'small'}
          value={form.values.login}
          name={'login'}
          color={
            searchErrors.login === signUpEnum.SUCCESS ? 'success' : undefined
          }
          onChange={handleChangeWithDebounce}
          fullWidth
          label="Логин"
          error={
            form.touched.login &&
            (Boolean(form.errors.login) ||
              searchErrors.login === signUpEnum.ERROR)
          }
          helperText={form.touched.login && form.errors.login}
          onBlur={form.handleBlur}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            },
          }}
        />
        <TextField
          className={styles.input}
          size={'small'}
          value={form.values.password}
          name={'password'}
          onChange={form.handleChange}
          fullWidth
          label="Пароль"
          type={showPassword ? 'text' : 'password'}
          error={form.touched.password && Boolean(form.errors.password)}
          helperText={form.touched.password && form.errors.password}
          onBlur={form.handleBlur}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
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
          type={showConfirmPassword ? 'text' : 'password'}
          fullWidth
          label="Подтверждение пароля"
          error={
            form.touched.confirmPassword && Boolean(form.errors.confirmPassword)
          }
          helperText={
            form.touched.confirmPassword && form.errors.confirmPassword
          }
          onBlur={form.handleBlur}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
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
        <TextField
          className={styles.input}
          size={'small'}
          value={form.values.email}
          name={'email'}
          onChange={handleChangeWithDebounce}
          fullWidth
          label="Email"
          error={
            form.touched.email &&
            (Boolean(form.errors.email) ||
              searchErrors.email === signUpEnum.ERROR)
          }
          helperText={form.touched.email && form.errors.email}
          color={
            searchErrors.email === signUpEnum.SUCCESS ? 'success' : undefined
          }
          onBlur={form.handleBlur}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <AlternateEmailIcon />
                </InputAdornment>
              ),
            },
          }}
        />
        <Box className={styles.footer}>
          <Button
            loading={loading}
            size={'large'}
            type={'submit'}
            variant={'contained'}
          >
            Далее
          </Button>
          <Step1Actions />
        </Box>
      </Box>
    </>
  )
}

export default Step1
