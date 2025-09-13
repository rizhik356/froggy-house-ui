import { Box, Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { addDeviceActions } from '../../model/slices/addDeviceSlice.ts'
import styles from '../../scss/styles.module.scss'

const Step2 = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(addDeviceActions.setNextStep())
  }

  return (
    <Box className={styles.step2}>
      <ol>
        <li>
          Убедитесь, что устройство подключено к сети, и индикатор горит синим
          цветом.
        </li>
        <li> Подключитесь к wifi сети &#34;Froggy_device&#34;.</li>
        <li>После подключения нажмите кнопку &#34;Далее&#34;.</li>
      </ol>
      <Button onClick={handleClick} size={'large'} variant={'contained'}>
        Далее
      </Button>
    </Box>
  )
}

export default Step2
