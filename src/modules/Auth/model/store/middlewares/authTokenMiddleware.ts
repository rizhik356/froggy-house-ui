import type { Middleware } from '@reduxjs/toolkit'
import { jwtDecode } from 'jwt-decode'
import { authActions } from '../authSlice'
import type { RootState } from '../../../../../app/store/store'
import type { TokenData } from '../../types/LoginTypes'
import { errorNotification } from '../../../../../shared/ui/Notifications'

export const authTokenMiddleware: Middleware<object, RootState> =
  (store) => (next) => (action) => {
    if (authActions.setTokens.match(action)) {
      const { access_token, refresh_token } = action.payload

      try {
        localStorage.setItem('access_token', access_token)
        localStorage.setItem('refresh_token', refresh_token)

        store.dispatch(authActions.setAccessToken(access_token))
        return next(action)
      } catch (error) {
        errorNotification(error as string)
        return next(authActions.clearAuthData())
      }
    }

    if (authActions.clearAuthData.match(action)) {
      localStorage.removeItem('access_token')
      localStorage.removeItem('refresh_token')
      return next(authActions.clearAuthData())
    }

    if (authActions.setAccessToken.match(action)) {
      try {
        const decoded = jwtDecode<TokenData>(action.payload)
        store.dispatch(authActions.setTokenData(decoded))
        return next(action)
      } catch (error) {
        errorNotification(error as string)
        return next(authActions.clearAuthData())
      }
    }

    return next(action)
  }
