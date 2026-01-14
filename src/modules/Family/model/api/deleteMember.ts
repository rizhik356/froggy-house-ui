import type { DeleteMemberParams } from '../types/DeleteMemberTypes.ts'
import { axiosInstance } from '../../../../app/api/axiosInstance.ts'
import { API_URLS } from '../../../../app/api/apiUrls.tsx'

const deleteMember = async (params: DeleteMemberParams) => {
  const response = await axiosInstance.delete(API_URLS.FAMILY.GET_FAMILIES, {
    params,
  })
  return response?.data
}

export { deleteMember }
