import axios from 'axios'

const getNewDeviceHead = async () => {
  return await axios.get(import.meta.env.VITE_NEW_DEVICE_URL, {
    timeout: 3000,
    headers: {
      'Access-Control-Request-Private-Network': 'true',
    },
  })
}

export { getNewDeviceHead }
