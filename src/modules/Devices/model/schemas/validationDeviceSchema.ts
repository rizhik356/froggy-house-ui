import * as Yup from 'yup'

const validationDeviceSchema = Yup.object().shape({
  name: Yup.string().required('Обязательное поле'),
  deviceId: Yup.number().required('Обязательное поле'),
  roomId: Yup.number().required('Обязательное поле'),
})

export { validationDeviceSchema }
