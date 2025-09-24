export type LoginFormValues = {
  login: string
  password: string
}

export type TokenData = {
  login: string
  id: number
  email: string
  iat: number
  exp: number
}

export type Store = {
  token: TokenPayload['token']
  tokenData: TokenPayload['tokenData'] | null
  step: number
  currentPasswordResetStep: number
}

export type TokenPayload = {
  token: string
  tokenData: TokenData
}

export type Tokens = {
  access_token: string
  refresh_token: string
}
