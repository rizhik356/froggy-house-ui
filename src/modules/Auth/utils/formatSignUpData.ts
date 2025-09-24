import type { FormValues } from '../model/types/SignUpTypes.ts'

const formatSignUpData = ({ login, email, password }: FormValues) => {
  return {
    login: login.trim().toLowerCase(),
    email: email.trim().toLowerCase(),
    password,
  }
}

export { formatSignUpData }
