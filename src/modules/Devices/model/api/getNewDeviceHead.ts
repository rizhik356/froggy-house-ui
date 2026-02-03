import axios from 'axios'

const getNewDeviceHead = async () => {
  // 1. Сначала OPTIONS preflight
  try {
    await axios.options(import.meta.env.VITE_NEW_DEVICE_URL, {
      timeout: 1000,
      headers: {
        Origin: window.location.origin,
        'Access-Control-Request-Method': 'GET',
        'Access-Control-Request-Headers': 'Content-Type',
        'Access-Control-Request-Private-Network': 'true',
      },
    })
  } catch {
    // OPTIONS может вернуть CORS ошибку, но это нормально
    console.log('OPTIONS preflight completed (may have CORS error)')
  }

  // 2. Затем основной GET запрос
  return await axios.get(import.meta.env.VITE_NEW_DEVICE_URL, {
    timeout: 3000,
    headers: {
      'Content-Type': 'application/json', // Добавляем чтобы вызвать preflight
    },
  })
}

export { getNewDeviceHead }
