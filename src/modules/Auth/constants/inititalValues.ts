import type { LoginFormValues, Store } from '../model/types/LoginTypes.ts'

const loginInitialValues: LoginFormValues = {
  login: '',
  password: '',
}

const storeInitialValues: Store = {
  token: '',
  tokenData: null,
}

export { loginInitialValues, storeInitialValues }
