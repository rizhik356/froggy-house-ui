import { axiosInstance } from './axiosInstance.ts'
import { API_URLS } from './apiUrls.tsx'

const getRooms = async () => {
  const response = await axiosInstance(API_URLS.ROOMS.GET_ROOMS)

  return response?.data
}

export { getRooms }
