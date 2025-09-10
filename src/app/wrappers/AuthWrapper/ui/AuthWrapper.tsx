import { Outlet } from 'react-router'
import styles from '../scss/styles.module.scss'
import img from '../../../../assets/img/home-page.png'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { paths } from '../../../../constants'
import { useAppSelector } from '../../../hooks/storeHooks.ts'

const AuthWrapper = () => {
  const token = useAppSelector((state) => state.auth.token)
  const navigate = useNavigate()

  useEffect(() => {
    if (token) {
      navigate(paths.MAIN)
    }
  }, [token])

  return (
    <div className={styles.container}>
      <img src={img} alt={'login_img'} className={styles.img} />
      <div className={styles.form_container}>
        <Outlet />
      </div>
    </div>
  )
}

export default AuthWrapper
