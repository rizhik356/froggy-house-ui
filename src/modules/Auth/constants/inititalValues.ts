import type { LoginFormValues, Store } from '../model/types/LoginTypes.ts'

const loginInitialValues: LoginFormValues = {
  login: '',
  password: '',
}

const storeInitialValues: Store = {
  token: '',
  tokenData: null,
  step: 1,
}

const signUp1StepInitialValues = {
  login: '',
}

export { loginInitialValues, storeInitialValues, signUp1StepInitialValues }
