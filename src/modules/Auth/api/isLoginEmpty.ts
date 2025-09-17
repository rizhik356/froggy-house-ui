import { axiosInstance } from '../../../app/api/axiosInstance.ts'
import { API_URLS } from '../../../app/api/apiUrls.tsx'

const isLoginEmpty = async (login: string) => {
  const response = await axiosInstance.get(
    API_URLS.USERS.CHECK_LOGIN + `/${login}`,
  )

  return response?.data
}

export { isLoginEmpty }
