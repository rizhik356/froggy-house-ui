import type { Params } from '../../Devices/model/types/DevicesTypes.ts'
import { axiosInstance } from '../../../app/api/axiosInstance.ts'
import { API_URLS } from '../../../app/api/apiUrls.tsx'

const postDeviceParams = async (params: Params) => {
  const response = await axiosInstance.post(
    API_URLS.DEVICES.POST_DEVICE_PARAMS,
    params,
  )

  return response?.data
}

export default postDeviceParams
