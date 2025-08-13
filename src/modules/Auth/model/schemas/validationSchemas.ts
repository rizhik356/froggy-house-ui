import * as Yup from 'yup'

const loginSchema = Yup.object().shape({
    login: Yup.string().required('Обязательное поле'),
    password: Yup.string().required('Обязательное поле'),
})

export {loginSchema}
