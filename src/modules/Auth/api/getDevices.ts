import { axiosInstance } from '../../../app/api/axiosInstance.ts'
import { API_URLS } from '../../../app/api/apiUrls.tsx'

const getDevices = async () => {
  const response = await axiosInstance.get(API_URLS.DEVICES.ALL_DEVICES)

  return response?.data
}

export { getDevices }
