import { axiosInstance } from '../../../../app/api/axiosInstance.ts'
import { API_URLS } from '../../../../app/api/apiUrls.tsx'

const getDevicesLogs = async () => {
  const response = await axiosInstance.get(
    API_URLS.DEVICES_LOGS.GET_DEVICES_LOGS,
  )

  return response?.data
}

export { getDevicesLogs }
