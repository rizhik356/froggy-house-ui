import type {LoginFormValues} from "../model/types/LoginTypes.ts";
import {API_URLS} from "../../../app/api/apiUrls.tsx";
import {axiosInstance} from '../../../app/api/axiosInstance.ts'

const postLoginData = async (data: LoginFormValues) => {
    const response = await axiosInstance.post(API_URLS.AUTH.SIGN_IN, data)
    return response.data
}

export default postLoginData;
