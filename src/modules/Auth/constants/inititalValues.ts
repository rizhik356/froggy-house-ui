import type { LoginFormValues, Store } from '../model/types/LoginTypes.ts'
import type { FormValues, Step2FormValues } from '../model/types/SignUpTypes.ts'
import type {
  PasswordResetStep1FormValues,
  PasswordResetStep2FormValues,
  PasswordResetStep3FormValues,
} from '../model/types/PasswordResetTypes.ts'

const loginInitialValues: LoginFormValues = {
  login: '',
  password: '',
}

const storeInitialValues: Store = {
  token: '',
  tokenData: null,
  step: 1,
  currentPasswordResetStep: 1,
}

const signUp1StepInitialValues: FormValues = {
  login: '',
  password: '',
  confirmPassword: '',
  email: '',
}

const signUp2StepInitialValues: Step2FormValues = {
  code: '',
}

const passwordResetStep1InitialValues: PasswordResetStep1FormValues = {
  email: '',
}

const passwordResetStep2InitialValues: PasswordResetStep2FormValues = {
  code: '',
}

const passwordResetStep3InitialValues: PasswordResetStep3FormValues = {
  password: '',
  confirmPassword: '',
}

export {
  loginInitialValues,
  storeInitialValues,
  signUp1StepInitialValues,
  signUp2StepInitialValues,
  passwordResetStep1InitialValues,
  passwordResetStep2InitialValues,
  passwordResetStep3InitialValues,
}
