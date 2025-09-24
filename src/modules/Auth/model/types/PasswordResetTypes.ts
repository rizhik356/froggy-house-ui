export type PasswordResetStep1FormValues = {
  email: string
}

export type PasswordResetStep2FormValues = {
  code: string
}

export type FormatPasswordResetStep2FormValues = {
  code: number
}

export type PasswordResetStep3FormValues = {
  password: string
  confirmPassword: string
}

export type NewPasswordRequestData = Omit<
  PasswordResetStep3FormValues,
  'confirmPassword'
>
