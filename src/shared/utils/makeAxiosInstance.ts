import { store } from '../../app/store'
import { postRefreshToken } from '../../app/api/postRefreshToken.ts'
import { makeRefreshParams } from './makeRefreshParams.ts'
import { addNewTokens } from './addNewTokens.ts'
import { AxiosError } from 'axios'
import { logOut } from './logOut.ts'
import { errorNotification } from '../ui/Notifications'
import { axiosInstance } from '../../app/api/axiosInstance.ts'

const makeAxiosInstance = () => {
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = store.getState().auth.token
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    },
  )

  const refreshValues: {
    isRefreshing: boolean
    refreshSubscribers: (() => void)[]
  } = {
    isRefreshing: false,
    refreshSubscribers: [],
  }

  axiosInstance.interceptors.response.use(
    (response) => {
      return response
    },
    async (error) => {
      const originalRequest = error.config
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true
        if (!refreshValues.isRefreshing) {
          refreshValues.isRefreshing = true
          try {
            const data = await postRefreshToken(makeRefreshParams())
            refreshValues.isRefreshing = false
            addNewTokens(data)

            axiosInstance.defaults.headers.common['Authorization'] =
              `Bearer ${data.access_token}`
            refreshValues.refreshSubscribers.forEach((callback) => callback())
            refreshValues.refreshSubscribers = []
            return await axiosInstance(originalRequest)
          } catch (err) {
            const error = err as AxiosError

            if (error?.response?.status === 400 && refreshValues.isRefreshing) {
              refreshValues.isRefreshing = false
              logOut()
            } else {
              errorNotification(error)
            }
          }
        } else {
          return new Promise((resolve) => {
            refreshValues.refreshSubscribers.push(() => {
              resolve(axiosInstance(originalRequest))
            })
          })
        }
      } else {
        return Promise.reject(error)
      }
    },
  )
}

export { makeAxiosInstance }
