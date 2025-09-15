import type { PatchOutputData } from '../types/DevicesTypes.ts'
import { axiosInstance } from '../../../../app/api/axiosInstance.ts'
import { API_URLS } from '../../../../app/api/apiUrls.tsx'

const patchOutputData = async (data: PatchOutputData) => {
  const response = await axiosInstance.patch(
    API_URLS.OUTPUTS.CHANGE_OUTPUT,
    data,
  )

  return response?.data
}

export { patchOutputData }
