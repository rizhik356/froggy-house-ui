import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import { useFormik } from 'formik'
import { deviceModalInitialValues } from '../constants/initialValues.ts'
import { useAppSelector } from '../../../app/hooks/storeHooks.ts'
import { useMemo, useState } from 'react'
import styles from '../scss/styles.module.scss'
import { validationDeviceSchema } from '../model/schemas/validationDeviceSchema.ts'
import type { FormValues } from '../model/types/AddNewDeviceTypes.ts'
import { postNewHubData } from '../model/api/postNewHubData.ts'
import { errorNotification } from '../../../shared/ui/Notifications'
import type {
  DeviceModalProps,
  NewHubData,
  PatchOutputData,
} from '../model/types/DevicesTypes.ts'
import { patchOutputData } from '../model/api/patchOutputData.ts'

const DeviceModalForm = ({ onFinish, patch = false }: DeviceModalProps) => {
  const { rooms, devicesTypes } = useAppSelector((state) => state.service)
  const { newOutputData, patchedData } = useAppSelector(
    (state) => state.devices,
  )
  const [loading, setLoading] = useState<boolean>(false)

  const initialPatchedData = useMemo(() => {
    return {
      roomId: patchedData.patchedRoomId,
      deviceId: patchedData.patchedDeviceId,
      name: patchedData.patchedName,
    }
  }, [patchedData])

  const handleSubmit = (values: FormValues) => {
    setLoading(true)

    const requestFunc = patch
      ? patchOutputData({
          ...values,
          id: patchedData.patchedId,
        } as PatchOutputData)
      : postNewHubData({ ...values, ...newOutputData } as NewHubData)

    requestFunc
      .then((data) => {
        onFinish(data)
        form.resetForm()
      })
      .catch((err) => errorNotification(err))
      .finally(() => setLoading(false))
  }

  const form = useFormik({
    initialValues: patch ? initialPatchedData : deviceModalInitialValues,
    onSubmit: (values) => {
      handleSubmit(values)
    },
    validationSchema: validationDeviceSchema,
    enableReinitialize: true,
  })

  return (
    <Box
      component={'form'}
      className={styles.form}
      onSubmit={form.handleSubmit}
    >
      <FormControl
        fullWidth
        error={form.touched.roomId && Boolean(form.errors.roomId)}
      >
        <InputLabel id={'roomId'}>Комната</InputLabel>
        <Select
          labelId={'roomId'}
          name={'roomId'}
          value={form.values.roomId || ''}
          onChange={form.handleChange}
          label={'Комната'}
          fullWidth
          onBlur={form.handleBlur}
        >
          {rooms.map(({ value, label }) => {
            return (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            )
          })}
        </Select>
        <FormHelperText>
          {form.touched.roomId && form.errors.roomId}
        </FormHelperText>
      </FormControl>
      <FormControl
        fullWidth
        error={form.touched.deviceId && Boolean(form.errors.deviceId)}
      >
        <InputLabel id={'deviceId'}>Устройство</InputLabel>
        <Select
          labelId={'deviceId'}
          name={'deviceId'}
          value={form.values.deviceId || ''}
          onChange={form.handleChange}
          label={'Устройство'}
          onBlur={form.handleBlur}
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
        <FormHelperText>
          {form.touched.deviceId && form.errors.deviceId}
        </FormHelperText>
      </FormControl>
      <TextField
        value={form.values.name}
        onChange={form.handleChange}
        name={'name'}
        fullWidth
        label={'Название'}
        variant={'outlined'}
        error={form.touched.name && Boolean(form.errors.name)}
        helperText={form.touched.name && form.errors.name}
        onBlur={form.handleBlur}
      />
      <Button
        size={'large'}
        type={'submit'}
        variant={'contained'}
        loading={loading}
      >
        Сохранить
      </Button>
    </Box>
  )
}

export default DeviceModalForm
