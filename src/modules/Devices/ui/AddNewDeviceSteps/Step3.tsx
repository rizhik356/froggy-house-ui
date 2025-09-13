import { useState, useEffect } from 'react'
import { useAppSelector } from '../../../../app/hooks/storeHooks.ts'
import { useDispatch } from 'react-redux'
import { getNewDeviceHead } from '../../model/api/getNewDeviceHead.ts'
import { errorNotification } from '../../../../shared/ui/Notifications'
import successNotification from '../../../../shared/ui/Notifications/sucessNotification.ts'
import { addDeviceActions } from '../../model/slices/addDeviceSlice.ts'
import { Box, Skeleton } from '@mui/material'
import styles from '../../scss/styles.module.scss'

const Step3 = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [update, setUpdate] = useState<boolean>(false)
  const dispatch = useDispatch()

  const { step, deviceToken } = useAppSelector((state) => state.addDevice)
  const id = useAppSelector((state) => state.auth.tokenData?.id)

  const makeIframeUrl = () => {
    const url = new URL(import.meta.env.VITE_NEW_DEVICE_URL)
    url.searchParams.set('token', deviceToken)
    url.searchParams.set('userId', String(id))

    return url.toString()
  }

  const fetchDeviceHead = () => {
    setUpdate(false)
    getNewDeviceHead()
      .then(() => {
        setLoading(false)
      })
      .catch(() => {
        setUpdate(true)
      })
  }

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== import.meta.env.VITE_NEW_DEVICE_URL) return
      const { status, message } = event.data

      if (status === 'success') {
        successNotification(
          'Устройство успешно дабавлено! Подключитесь к вашей wi-fi сети',
        )
        dispatch(addDeviceActions.setModalClosed())
      } else if (status === 'error') {
        errorNotification(message)
      }
    }

    window.addEventListener('message', handleMessage)

    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [])

  useEffect(() => {
    if (step === 2) {
      setUpdate(true)
    } else {
      setUpdate(false)
    }
  }, [step])

  useEffect(() => {
    if (step === 2 && update) {
      fetchDeviceHead()
    }
  }, [update])

  return (
    <Box className={styles.step3}>
      {loading ? (
        Array.from({ length: 8 }, (_, index) => {
          return <Skeleton key={index} animation={'wave'} />
        })
      ) : (
        <iframe
          src={makeIframeUrl()}
          style={{
            height: '100%',
            width: '100%',
            flex: 1,
          }}
        ></iframe>
      )}
    </Box>
  )
}

export default Step3
