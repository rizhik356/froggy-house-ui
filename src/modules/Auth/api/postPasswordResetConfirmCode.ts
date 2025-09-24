import type { FormatPasswordResetStep2FormValues } from '../model/types/PasswordResetTypes.ts'
import { axiosInstance } from '../../../app/api/axiosInstance.ts'
import { API_URLS } from '../../../app/api/apiUrls.tsx'

const postPasswordResetConfirmCode = async (
  values: FormatPasswordResetStep2FormValues,
) => {
  const response = await axiosInstance.post(API_URLS.USERS.CONFIRM_CODE, values)

  return response?.data
}

export default postPasswordResetConfirmCode
