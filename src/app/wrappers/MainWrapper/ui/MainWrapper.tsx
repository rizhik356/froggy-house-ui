import { useAppSelector } from '../../../hooks/storeHooks.ts'
import { Outlet } from 'react-router'
import { Navigate } from 'react-router-dom'
import { paths } from '../../../../constants'
import { SideMenu } from '../../../../modules/SideMenu'
import { Header } from '../../../../modules/Header'
import { Box } from '@mui/material'

import styles from '../scss/styles.module.scss'
import { useEffect, useState } from 'react'
import { makeAxiosInstance } from '../../../../shared/utils/makeAxiosInstance.ts'
import { getRooms } from '../../../api/getRooms.ts'
import { errorNotification } from '../../../../shared/ui/Notifications'
import { getDevicesTypes } from '../../../api/getDevicesTypes.ts'
import { useDispatch } from 'react-redux'
import { serviceActions } from '../../../store/slices/serviceSlice.ts'

const MainWrapper = () => {
  const token = useAppSelector((state) => state.auth.token)
  const { isCollapsed } = useAppSelector((state) => state.header)
  const [loading, setLoading] = useState<boolean>(true)

  const dispatch = useDispatch()

  useEffect(() => {
    if (token) {
      makeAxiosInstance()
      Promise.all([getRooms(), getDevicesTypes()])
        .then(([rooms, devicesTypes]) => {
          dispatch(serviceActions.setServiceData({ rooms, devicesTypes }))
        })
        .catch((err) => errorNotification(err))
      setLoading(false)
    }
  }, [])

  const layout = !loading && (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Header />
      <div
        style={{
          display: 'flex',
          flex: 1,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <SideMenu />
        <Box
          className={
            !isCollapsed
              ? `${styles.layout_container} ${styles.collapsed}`
              : styles.layout_container
          }
        >
          <Outlet />
        </Box>
      </div>
    </Box>
  )

  return token ? layout : <Navigate to={paths.AUTH.LOGIN} />
}

export default MainWrapper
