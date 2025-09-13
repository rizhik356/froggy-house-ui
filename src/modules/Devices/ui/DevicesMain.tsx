import { Box } from '@mui/material'

import AddNewDeviceModal from './AddNewDeviceModal.tsx'
import { useAppSelector } from '../../../app/hooks/storeHooks.ts'
import { useEffect } from 'react'
import { getDevices } from '../../Auth/api/getDevices.ts'
import { useDispatch } from 'react-redux'
import { devicesActions } from '../model/slices/devicesSlice.ts'
import { errorNotification } from '../../../shared/ui/Notifications'
import styles from '../scss/styles.module.scss'
import DeviceCard from './DeviceCard.tsx'

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
    }
  }, [devicesUpdate])

  return (
    <>
      <AddNewDeviceModal />
      <Box className={styles.main_container}>
        <Box className={styles.main_container_inner}>
          {devices?.map((item, index) => {
            return <DeviceCard {...item} key={index} />
          })}
        </Box>
      </Box>
    </>
  )
}

export default DevicesMain
