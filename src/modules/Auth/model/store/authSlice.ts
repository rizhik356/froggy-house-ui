import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { storeInitialValues } from '../../constants/inititalValues.ts'
import type { TokenData, Tokens } from '../types/LoginTypes.ts'

const auth = createSlice({
  name: 'auth',
  initialState: storeInitialValues,
  reducers: {
    setTokens: (state, action: PayloadAction<Tokens>) => {
      state.token = action.payload.access_token
    },
    setTokenData: (state, action: PayloadAction<TokenData>) => {
      state.tokenData = action.payload
    },
    clearAuthData: (state) => {
      state.tokenData = null
      state.token = ''
    },
  },
})

export const authActions = auth.actions

export default auth.reducer
