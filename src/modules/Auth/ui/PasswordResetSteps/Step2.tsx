import { Box, Button, TextField, Typography } from '@mui/material'
import styles from '../../scss/styles.module.scss'
import { useFormik } from 'formik'
import { passwordResetStep2InitialValues } from '../../constants/inititalValues.ts'
import { passwordResetStep2Schema } from '../../model/schemas/validationSchemas.ts'
import React, { useState } from 'react'
import postPasswordResetConfirmCode from '../../api/postPasswordResetConfirmCode.ts'
import type { PasswordResetStep2FormValues } from '../../model/types/PasswordResetTypes.ts'
import { errorNotification } from '../../../../shared/ui/Notifications'
import { useNavigate } from 'react-router-dom'
import { paths } from '../../../../constants'

const Step2 = () => {
  const [loading, setLoading] = useState<boolean>(false)

  const navigate = useNavigate()

  const handleSubmit = (values: PasswordResetStep2FormValues) => {
    setLoading(true)
    const formatValues = { code: Number(values.code) }
    postPasswordResetConfirmCode(formatValues)
      .then(() => {
        navigate(paths.AUTH.RESET_PASSWORD + '/3')
      })
      .catch(errorNotification)
      .finally(() => {
        setLoading(false)
      })
  }

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const cleanedValue = target.value.replace(/\D/g, '').slice(0, 6)
    form.setFieldValue('code', cleanedValue)
  }

  const form = useFormik({
    initialValues: passwordResetStep2InitialValues,
    onSubmit: handleSubmit,
    validationSchema: passwordResetStep2Schema,
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
        Введите код подтверждения, который был отправлен вам на почту
      </Typography>
      <TextField
        size={'small'}
        name={'code'}
        onChange={handleChange}
        error={form.touched.code && Boolean(form.errors.code)}
        helperText={form.touched.code && form.errors.code}
        onBlur={form.handleBlur}
        value={form.values.code}
        fullWidth
        className={styles.input}
        label={'Код подтверждения'}
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

export default Step2
