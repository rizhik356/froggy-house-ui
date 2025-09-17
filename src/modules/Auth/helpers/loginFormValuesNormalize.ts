import type { LoginFormValues } from '../model/types/LoginTypes.ts'

const loginFormValuesNormalize = ({ login, password }: LoginFormValues) => {
  return { login: login.trim().toLowerCase(), password: password.trim() }
}

export { loginFormValuesNormalize }
