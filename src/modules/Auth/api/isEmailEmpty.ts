import { axiosInstance } from '../../../app/api/axiosInstance.ts'
import { API_URLS } from '../../../app/api/apiUrls.tsx'

const isEmailEmpty = async (email: string) => {
  const response = await axiosInstance.get(
    API_URLS.USERS.CHECK_EMAIL + `/${email}`,
  )

  return response?.data
}

export { isEmailEmpty }
