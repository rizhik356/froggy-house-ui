import { axiosInstance } from './axiosInstance.ts'
import { API_URLS } from './apiUrls.tsx'
import type { Tokens } from '../../modules/Auth'

const postRefreshToken = async (values: Tokens) => {
  const response = await axiosInstance.post(API_URLS.AUTH.REFRESH_TOKEN, values)
  return response?.data
}

export { postRefreshToken }
