import { Box, Button, TextField, Typography } from '@mui/material'
import styles from '../../scss/styles.module.scss'
import { useFormik } from 'formik'
import { signUp2StepInitialValues } from '../../constants/inititalValues.ts'
import { useState } from 'react'
import React from 'react'
import type { Step2FormValues } from '../../model/types/SignUpTypes.ts'
import postSignUpVerifyCode from '../../api/postSignUpVerifyCode.ts'
import { errorNotification } from '../../../../shared/ui/Notifications'
import { authActions } from '../../model/store/authSlice.ts'
import { useDispatch } from 'react-redux'
import { signupVerifyCodeSchema } from '../../model/schemas/validationSchemas.ts'

const Step2 = () => {
  const [loading, setLoading] = useState<boolean>(false)

  const dispatch = useDispatch()

  const handleFinish = (values: Step2FormValues) => {
    setLoading(true)
    const formatValues = { code: Number(values.code) }
    postSignUpVerifyCode(formatValues)
      .then((data) => {
        dispatch(authActions.setTokens(data))
      })
      .catch(errorNotification)
      .finally(() => setLoading(false))
  }

  const form = useFormik({
    initialValues: signUp2StepInitialValues,
    onSubmit: handleFinish,
    validationSchema: signupVerifyCodeSchema,
  })

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const cleanedValue = target.value.replace(/\D/g, '').slice(0, 6)
    form.setFieldValue('code', cleanedValue)
  }

  return (
    <Box
      className={styles.form}
      component={'form'}
      onSubmit={form.handleSubmit}
    >
      <Typography
        variant={'body1'}
        className={styles.description}
        color="textSecondary"
      >
        Пожалуйста, введите код подтвреждения, отправленный вам на почту
      </Typography>
      <TextField
        className={styles.input}
        name={'code'}
        size={'small'}
        fullWidth
        label={'Код подтверждения'}
        error={form.touched.code && Boolean(form.errors.code)}
        helperText={form.touched.code && form.errors.code}
        onBlur={form.handleBlur}
        onChange={handleChange}
        value={form.values.code}
      />
      <Button
        loading={loading}
        size={'large'}
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
