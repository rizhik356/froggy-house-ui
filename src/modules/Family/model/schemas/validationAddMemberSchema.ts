import * as Yup from 'yup'

const validationAddMemberSchema = Yup.object().shape({
  email: Yup.string()
    .required('Обязательное поле')
    .email('Введите корректный email адрес')
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      'Введите корректный email адрес',
    )
    .test('email-format', 'Введите корректный email адрес', (value) => {
      if (!value) return false
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
      return emailRegex.test(value)
    }),
  memberId: Yup.number().required('Обязательное поле'),
})

export { validationAddMemberSchema }
