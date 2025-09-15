import { useState } from 'react'
import { errorNotification } from '../../../../shared/ui/Notifications'
import { useDispatch } from 'react-redux'
import { addDeviceActions } from '../../model/slices/addDeviceSlice.ts'
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import { useFormik } from 'formik'
import { addNewDeviceStep1InitialValues } from '../../constants/initialValues.ts'
import type { FormValues } from '../../model/types/AddNewDeviceTypes.ts'
import { useAppSelector } from '../../../../app/hooks/storeHooks.ts'
import styles from '../../scss/styles.module.scss'
import { postStep1Data } from '../../model/api/postStep1Data.ts'
import { validationDeviceSchema } from '../../model/schemas/validationDeviceSchema.ts'

const Step1 = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState<boolean>(false)
  const { rooms, devicesTypes } = useAppSelector((state) => state.service)

  const handleSubmit = (values: FormValues) => {
    setLoading(true)
    postStep1Data(values)
      .then((data) => {
        dispatch(addDeviceActions.setDeviceToken(data.token))
      })
      .catch((error) => {
        errorNotification(error)
      })
      .finally(() => setLoading(false))
  }

  const form = useFormik({
    initialValues: addNewDeviceStep1InitialValues,
    onSubmit: (values) => {
      handleSubmit(values)
    },
    validationSchema: validationDeviceSchema,
  })

  return (
    <>
      <Box
        component={'form'}
        className={styles.form}
        onSubmit={form.handleSubmit}
      >
        <FormControl fullWidth>
          <InputLabel id={'roomId'}>Комната</InputLabel>
          <Select
            labelId={'roomId'}
            name={'roomId'}
            value={form.values.roomId || ''}
            onChange={form.handleChange}
            label={'Комната'}
            fullWidth
          >
            {rooms.map(({ value, label }) => {
              return (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id={'deviceId'}>Устройство</InputLabel>
          <Select
            labelId={'deviceId'}
            name={'deviceId'}
            value={form.values.deviceId || ''}
            onChange={form.handleChange}
            label={'Устройство'}
            fullWidth
          >
            {devicesTypes.map(({ value, label }) => {
              return (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
        <TextField
          value={form.values.name}
          onChange={form.handleChange}
          name={'name'}
          fullWidth
          label={'Название'}
          variant={'outlined'}
        />
        <Button
          size={'large'}
          type={'submit'}
          variant={'contained'}
          loading={loading}
        >
          Далее
        </Button>
      </Box>
    </>
  )
}

export default Step1
