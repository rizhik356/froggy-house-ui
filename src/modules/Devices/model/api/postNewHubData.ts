import type { NewHubData } from '../types/DevicesTypes.ts'
import { axiosInstance } from '../../../../app/api/axiosInstance.ts'
import { API_URLS } from '../../../../app/api/apiUrls.tsx'

const postNewHubData = async (values: NewHubData) => {
  const response = await axiosInstance.post(
    API_URLS.OUTPUTS.CHANGE_OUTPUT,
    values,
  )

  return response?.data
}

export { postNewHubData }
