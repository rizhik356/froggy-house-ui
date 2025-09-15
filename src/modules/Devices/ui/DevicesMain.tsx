import { Box } from '@mui/material'

import AddNewDeviceModal from './AddNewDeviceModal.tsx'
import { useAppSelector } from '../../../app/hooks/storeHooks.ts'
import { useEffect, useMemo } from 'react'
import { getDevices } from '../../Auth/api/getDevices.ts'
import { useDispatch } from 'react-redux'
import { devicesActions } from '../model/slices/devicesSlice.ts'
import { errorNotification } from '../../../shared/ui/Notifications'
import styles from '../scss/styles.module.scss'
import DeviceModal from './DeviceModal.tsx'
import { makeDevices } from '../utils/makeDevices.tsx'

const DevicesMain = () => {
  const dispatch = useDispatch()
  const { devicesUpdate, devices } = useAppSelector((state) => state.devices)

  useEffect(() => {
    if (devicesUpdate) {
      getDevices()
        .then((data) => {
          dispatch(devicesActions.setDevices(data))
        })
        .catch((error) => errorNotification(error))
        .finally(() => {
          dispatch(devicesActions.finishUpdateDevices())
        })
    }
  }, [devicesUpdate])

  const renderDevices = useMemo(() => {
    return makeDevices(devices)
  }, [devices])

  return (
    <>
      <AddNewDeviceModal />
      <DeviceModal />
      <Box className={styles.main_container}>
        <Box className={styles.main_container_inner}>{renderDevices}</Box>
      </Box>
    </>
  )
}

export default DevicesMain
