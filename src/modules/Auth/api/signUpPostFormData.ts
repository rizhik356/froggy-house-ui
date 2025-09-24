import { axiosInstance } from '../../../app/api/axiosInstance.ts'
import { API_URLS } from '../../../app/api/apiUrls.tsx'
import type { SignUpRequestData } from '../model/types/SignUpTypes.ts'

const signUpPostFormData = async (values: SignUpRequestData) => {
  const response = await axiosInstance.post(API_URLS.AUTH.SIGN_UP, values)

  return response?.data
}

export { signUpPostFormData }
