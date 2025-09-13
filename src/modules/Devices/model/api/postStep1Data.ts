import type { FormValues } from '../types/AddNewDeviceTypes.ts'
import { axiosInstance } from '../../../../app/api/axiosInstance.ts'
import { API_URLS } from '../../../../app/api/apiUrls.tsx'

const postStep1Data = async (data: FormValues) => {
  const response = await axiosInstance.post(
    API_URLS.DEVICES.ADD_USER_DEVICE,
    data,
  )

  return response?.data
}

export { postStep1Data }
