import type { NewPasswordRequestData } from '../model/types/PasswordResetTypes.ts'
import { axiosInstance } from '../../../app/api/axiosInstance.ts'
import { API_URLS } from '../../../app/api/apiUrls.tsx'

const postNewPassword = async (values: NewPasswordRequestData) => {
  const response = await axiosInstance.post(
    API_URLS.USERS.CHANGE_PASSWORD,
    values,
  )

  return response?.data
}
export default postNewPassword
