import { Box, Button, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import { signUp1StepInitialValues } from '../../constants/inititalValues.ts'
import styles from '../../scss/styles.module.scss'
import { useNavigate } from 'react-router-dom'
import { paths } from '../../../../constants'
import type { FormValues } from '../../model/types/SignUpTypes.ts'
import { isLoginEmpty } from '../../api/isLoginEmpty.ts'
import { errorNotification } from '../../../../shared/ui/Notifications'
import { useState } from 'react'
import { signupLoginSchema } from '../../model/schemas/validationSchemas.ts'

const Step1 = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmit = ({ login }: FormValues) => {
    setLoading(true)
    const formatLogin = login.trim().toLowerCase()

    isLoginEmpty(formatLogin)
      .then(() => {
        navigate(`${paths.AUTH.REGISTER}/2`)
      })
      .catch((error) => errorNotification(error))
      .finally(() => setLoading(false))
  }

  const form = useFormik({
    initialValues: signUp1StepInitialValues,
    onSubmit: handleSubmit,
    validationSchema: signupLoginSchema,
  })

  return (
    <>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <TextField
          className={styles.input}
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
          className={styles.input}
          size={'small'}
          value={form.values.login}
          name={'login'}
          onChange={form.handleChange}
          fullWidth
          label="Пароль"
          error={form.touched.login && Boolean(form.errors.login)}
          helperText={form.touched.login && form.errors.login}
          onBlur={form.handleBlur}
        />
        <TextField
          className={styles.input}
          size={'small'}
          value={form.values.login}
          name={'login'}
          onChange={form.handleChange}
          fullWidth
          label="Подтверждение пароля"
          error={form.touched.login && Boolean(form.errors.login)}
          helperText={form.touched.login && form.errors.login}
          onBlur={form.handleBlur}
        />
        <TextField
          className={styles.input}
          size={'small'}
          value={form.values.login}
          name={'login'}
          onChange={form.handleChange}
          fullWidth
          label="Email"
          error={form.touched.login && Boolean(form.errors.login)}
          helperText={form.touched.login && form.errors.login}
          onBlur={form.handleBlur}
        />
      </Box>
      <Box
        component="form"
        className={styles.form}
        onSubmit={form.handleSubmit}
      >
        <Button
          loading={loading}
          size={'large'}
          type={'submit'}
          variant={'contained'}
        >
          Далее
        </Button>
        <Box className={styles.actions}>
          <Typography variant={'body2'}>Есть аккаунт?</Typography>
          <Typography variant={'body2'}>&nbsp;</Typography>
          <Typography
            onClick={() => navigate(paths.AUTH.LOGIN)}
            variant={'body2'}
          >
            Войти
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default Step1
