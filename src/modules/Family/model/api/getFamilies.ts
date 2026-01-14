import { axiosInstance } from '../../../../app/api/axiosInstance.ts'
import { API_URLS } from '../../../../app/api/apiUrls.tsx'
import type { Family } from '../types/FamilyTypes.ts'

const getFamilies = async (): Promise<Family> => {
  const response = await axiosInstance(API_URLS.FAMILY.GET_FAMILIES)

  return response?.data
}

export { getFamilies }
