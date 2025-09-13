import { toast } from 'react-toastify'

const successNotification = (message?: string) => {
  return toast.success(message, {
    position: 'top-right',
    autoClose: 5000,
    draggable: true,
    pauseOnHover: true,
  })
}

export default successNotification
