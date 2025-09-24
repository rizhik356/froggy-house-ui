import { Box, Button, TextField, Typography } from '@mui/material'
import styles from '../../scss/styles.module.scss'
import { useFormik } from 'formik'
import { passwordResetStep1InitialValues } from '../../constants/inititalValues.ts'
import { passwordResetStep1Schema } from '../../model/schemas/validationSchemas.ts'
import { useState } from 'react'
import type { PasswordResetStep1FormValues } from '../../model/types/PasswordResetTypes.ts'
import postEmailToPasswordReset from '../../api/postEmailToPasswordReset.ts'
import { errorNotification } from '../../../../shared/ui/Notifications'
import { useNavigate } from 'react-router-dom'
import { paths } from '../../../../constants'

const Step1 = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const navigate = useNavigate()

  const handleSubmit = ({ email }: PasswordResetStep1FormValues) => {
    setLoading(true)
    const formatEmail = email.trim().toLowerCase()
    postEmailToPasswordReset({ email: formatEmail })
      .then(() => {
        navigate(paths.AUTH.RESET_PASSWORD + '/2')
      })
      .catch(errorNotification)
      .finally(() => setLoading(false))
  }

  const form = useFormik({
    initialValues: passwordResetStep1InitialValues,
    onSubmit: handleSubmit,
    validationSchema: passwordResetStep1Schema,
  })

  return (
    <Box
      component={'form'}
      className={styles.form}
      onSubmit={form.handleSubmit}
    >
      <Typography
        className={styles.description}
        variant="body2"
        color="textSecondary"
      >
        Укажите адрес электронной почты, чтобы мы выслали вам код подтверждения
      </Typography>
      <TextField
        size={'small'}
        name={'email'}
        onChange={form.handleChange}
        value={form.values.email}
        error={form.touched.email && Boolean(form.errors.email)}
        helperText={form.touched.email && form.errors.email}
        onBlur={form.handleBlur}
        fullWidth
        className={styles.input}
        label={'Email'}
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

export default Step1
