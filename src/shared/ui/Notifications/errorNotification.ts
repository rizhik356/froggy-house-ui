import { toast } from 'react-toastify'
import { AxiosError } from 'axios'

//  интерфейс для данных ошибки
interface ErrorResponse {
  message: string
}

const errorNotification = (error: AxiosError | string | ErrorResponse) => {
  const makeMessage = (error: AxiosError | ErrorResponse) => {
    if ('response' in error) {
      return (
        (error?.response?.data as ErrorResponse)?.message ||
        'Ошибка загрузки данных'
      )
    }
    return error.message
  }

  const errorMessage: string =
    typeof error !== 'string' ? makeMessage(error) : error

  return toast.error(errorMessage || 'Ошибка загрузки данных.', {
    position: 'top-right',
    autoClose: 5000,
    draggable: true,
    pauseOnHover: true,
  })
}

export default errorNotification
