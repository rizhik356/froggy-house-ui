import { useAppSelector } from '../../../hooks/storeHooks.ts'
import { Outlet } from 'react-router'
import { Navigate } from 'react-router-dom'
import { paths } from '../../../../constants'
import { SideMenu } from '../../../../modules/SideMenu'
import { Header } from '../../../../modules/Header'
import { Box } from '@mui/material'

import styles from '../scss/styles.module.scss'
import { useEffect } from 'react'
import { makeAxiosInstance } from '../../../../shared/utils/makeAxiosInstance.ts'

const MainWrapper = () => {
  const token = useAppSelector((state) => state.auth.token)

  useEffect(() => {
    if (token) {
      makeAxiosInstance()
    }
  }, [token])

  const layout = (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
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
