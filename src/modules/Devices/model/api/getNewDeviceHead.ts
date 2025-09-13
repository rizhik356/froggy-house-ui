import axios from 'axios'

const getNewDeviceHead = async () => {
  return await axios.head(import.meta.env.VITE_NEW_DEVICE_URL, {
    timeout: 3000,
  })
}

export { getNewDeviceHead }
