import { API_URLS } from './apiUrls.tsx'
import { axiosInstance } from './axiosInstance.ts'

const getDevicesTypes = async () => {
  const response = await axiosInstance.get(API_URLS.DEVICES.GET_DEVICES_TYPES)
  return response?.data
}

export { getDevicesTypes }
