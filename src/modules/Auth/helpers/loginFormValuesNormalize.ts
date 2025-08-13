import type { LoginFormValues } from '../model/types/LoginTypes.ts'

const loginFormValuesNormalize = ({ login, ...rest }: LoginFormValues) => {
  return { login: login.trim().toLowerCase(), ...rest }
}

export { loginFormValuesNormalize }
