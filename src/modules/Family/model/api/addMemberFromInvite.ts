import { axiosInstance } from '../../../../app/api/axiosInstance.ts'
import { API_URLS } from '../../../../app/api/apiUrls.tsx'

const addMemberFromInvite = async (data: { token: string }) => {
  const response = await axiosInstance.post(API_URLS.FAMILY.ACCESS_INVITE, data)
  return response?.data
}

export { addMemberFromInvite }
