import * as Yup from 'yup'

const loginSchema = Yup.object().shape({
  login: Yup.string().required('Обязательное поле'),
  password: Yup.string().required('Обязательное поле'),
})

const signupLoginSchema = Yup.object().shape({
  login: Yup.string()
    .required('Обязательное поле')
    .min(2, 'Логин должен содержать минимум 2 символа')
    .max(20, 'Логин не должен превышать 50 символов'),
  password: Yup.string()
    .required('Обязательное поле')
    .min(8, 'Пароль должен содержать минимум 8 символов')
    .matches(/[A-Z]/, 'Пароль должен содержать хотя бы одну заглавную букву')
    .matches(/[a-z]/, 'Пароль должен содержать хотя бы одну строчную букву')
    .matches(/[0-9]/, 'Пароль должен содержать хотя бы одну цифру'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Пароли не совпадают')
    .required('Обязательное поле'),
  email: Yup.string()
    .email('Введите корректный адрес электронной почты')
    .required('Обязательное поле'),
})

const signupVerifyCodeSchema = Yup.object().shape({
  code: Yup.string()
    .required('Обязательное поле')
    .min(6, 'Код должен содержать 6 символов'),
})

const passwordResetStep1Schema = Yup.object().shape({
  email: Yup.string()
    .email('Введите корректный адрес электронной почты')
    .required('Обязательное поле'),
})

const passwordResetStep2Schema = Yup.object().shape({
  code: Yup.string()
    .required('Обязательное поле')
    .min(6, 'Код должен содержать 6 символов'),
})

const passwordResetStep3Schema = Yup.object().shape({
  password: Yup.string()
    .required('Обязательное поле')
    .min(8, 'Пароль должен содержать минимум 8 символов')
    .matches(/[A-Z]/, 'Пароль должен содержать хотя бы одну заглавную букву')
    .matches(/[a-z]/, 'Пароль должен содержать хотя бы одну строчную букву')
    .matches(/[0-9]/, 'Пароль должен содержать хотя бы одну цифру'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Пароли не совпадают')
    .required('Обязательное поле'),
})

export {
  loginSchema,
  signupLoginSchema,
  signupVerifyCodeSchema,
  passwordResetStep1Schema,
  passwordResetStep2Schema,
  passwordResetStep3Schema,
}
