

const getNewDeviceHead = async () => {
  return await fetch(import.meta.env.VITE_NEW_DEVICE_URL, {
    method: 'HEAD',
    mode: "no-cors"
  })
}

export { getNewDeviceHead }
