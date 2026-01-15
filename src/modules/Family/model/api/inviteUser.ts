import type { FormValues } from '../types/AddMemberTypes'
import { axiosInstance } from '../../../../app/api/axiosInstance.ts'
import { API_URLS } from '../../../../app/api/apiUrls.tsx'

const inviteUser = async (values: FormValues) => {
  const response = await axiosInstance.post(API_URLS.FAMILY.INVITE_USER, values)
  return response?.data
}

export { inviteUser }
