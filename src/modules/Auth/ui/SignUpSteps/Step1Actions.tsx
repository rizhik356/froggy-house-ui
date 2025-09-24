import { Box, Typography } from '@mui/material'
import styles from '../../scss/styles.module.scss'
import { paths } from '../../../../constants'
import { useNavigate } from 'react-router-dom'

const Step1Actions = () => {
  const navigate = useNavigate()

  return (
    <Box className={styles.actions}>
      <Typography variant={'body2'}>Есть аккаунт?</Typography>
      <Typography variant={'body2'}>&nbsp;</Typography>
      <Typography onClick={() => navigate(paths.AUTH.LOGIN)} variant={'body2'}>
        Войти
      </Typography>
    </Box>
  )
}

export default Step1Actions
