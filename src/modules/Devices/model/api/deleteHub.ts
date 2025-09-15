import { axiosInstance } from '../../../../app/api/axiosInstance.ts'
import { API_URLS } from '../../../../app/api/apiUrls.tsx'

const deleteHub = async (id: number) => {
  const response = await axiosInstance.delete(
    API_URLS.OUTPUTS.CHANGE_OUTPUT + `/${id}`,
  )

  return response?.data
}

export { deleteHub }
