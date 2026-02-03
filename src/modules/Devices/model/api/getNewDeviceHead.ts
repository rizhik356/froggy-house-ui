const getNewDeviceHead = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    try {
      const success = navigator.sendBeacon(import.meta.env.VITE_NEW_DEVICE_URL)

      if (success) {
        resolve() // Успешно отправлено
      } else {
        reject(new Error('sendBeacon failed')) // Не удалось отправить
      }
    } catch (error) {
      reject(error) // Ошибка при вызове
    }
  })
}

export { getNewDeviceHead }
