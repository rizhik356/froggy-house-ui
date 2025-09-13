import { useAppSelector } from '../../../hooks/storeHooks.ts'
import { Outlet } from 'react-router'
import { Navigate } from 'react-router-dom'
import { paths } from '../../../../constants'
import { SideMenu } from '../../../../modules/SideMenu'
import { Header } from '../../../../modules/Header'
import { Box } from '@mui/material'

import styles from '../scss/styles.module.scss'
import { useLayoutEffect, useState } from 'react'
import { makeAxiosInstance } from '../../../../shared/utils/makeAxiosInstance.ts'

const MainWrapper = () => {
  const token = useAppSelector((state) => state.auth.token)
  const [loading, setLoading] = useState<boolean>(true)

  useLayoutEffect(() => {
    if (token) {
      makeAxiosInstance()
      setLoading(false)
    }
  }, [token])

  const layout = loading ? null : (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Header />
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <SideMenu />
        <Box className={styles.layout_container}>
          <Outlet />
        </Box>
      </div>
    </Box>
  )

  return token ? layout : <Navigate to={paths.AUTH.LOGIN} />
}

export default MainWrapper
