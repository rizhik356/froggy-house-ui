import type { RequestFormValues } from '../model/types/SignUpTypes.ts'
import { axiosInstance } from '../../../app/api/axiosInstance.ts'
import { API_URLS } from '../../../app/api/apiUrls.tsx'

const postSignUpVerifyCode = async (data: RequestFormValues) => {
  const response = await axiosInstance.post(API_URLS.AUTH.CONFIRM_CODE, data)
  return response?.data
}

export default postSignUpVerifyCode
