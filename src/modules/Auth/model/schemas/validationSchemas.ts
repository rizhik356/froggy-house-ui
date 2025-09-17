import * as Yup from 'yup'

const loginSchema = Yup.object().shape({
  login: Yup.string().required('Обязательное поле'),
  password: Yup.string().required('Обязательное поле'),
})

const signupLoginSchema = Yup.object().shape({
  login: Yup.string()
    .required('Логин обязателен')
    .min(2, 'Логин должен содержать минимум 2 символа')
    .max(20, 'Логин не должен превышать 50 символов'),
})

export { loginSchema, signupLoginSchema }
