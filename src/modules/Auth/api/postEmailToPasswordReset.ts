import type { PasswordResetStep1FormValues } from '../model/types/PasswordResetTypes.ts'
import { axiosInstance } from '../../../app/api/axiosInstance.ts'
import { API_URLS } from '../../../app/api/apiUrls.tsx'

const postEmailToPasswordReset = async (
  values: PasswordResetStep1FormValues,
) => {
  const response = await axiosInstance.post(
    API_URLS.USERS.CONFIRM_EMAIL,
    values,
  )

  return response?.data
}

export default postEmailToPasswordReset
