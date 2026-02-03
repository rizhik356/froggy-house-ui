const getNewDeviceHead = (): Promise<boolean> => {
  return new Promise((resolve) => {
    // Создаем скрытый iframe
    const iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    let resolved = false

    iframe.onload = () => {
      if (!resolved) {
        resolved = true
        document.body.removeChild(iframe)
        resolve(true)
      }
    }

    iframe.onerror = () => {
      if (!resolved) {
        resolved = true
        document.body.removeChild(iframe)
        resolve(false)
      }
    }

    // Открываем URL с ping параметром
    iframe.src = `${import.meta.env.VITE_NEW_DEVICE_URL}?ping=${Date.now()}`
    document.body.appendChild(iframe)

    setTimeout(() => {
      if (!resolved) {
        resolved = true
        if (iframe.parentNode) {
          document.body.removeChild(iframe)
        }
        resolve(false)
      }
    }, 3000)
  })
}

export { getNewDeviceHead }