export type FormValues = {
  login: string
  password: string
  confirmPassword: string
  email: string
}

export type DebounceFunc = Record<string, (param: string) => void>

export type SignUpRequestData = Omit<FormValues, 'confirmPassword'>

export type Step2FormValues = {
  code: string
}

export type RequestFormValues = {
  code: number
}
