import { axiosInstance } from '../../../../app/api/axiosInstance.ts'
import { API_URLS } from '../../../../app/api/apiUrls.tsx'

const getDevicesTypes = async () => {
  const response = await axiosInstance.get(API_URLS.DEVICES.GET_DEVICES_TYPES)
  return response?.data
}

export { getDevicesTypes }
