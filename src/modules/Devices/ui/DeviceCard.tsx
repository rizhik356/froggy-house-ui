import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  IconButton,
} from '@mui/material'
import type { DeviceCardProps } from '../model/types/DevicesTypes.ts'
import makeStaticPath from '../../../shared/utils/makeStaticPath.ts'
import styles from '../scss/styles.module.scss'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'
import { useState } from 'react'
import type { Params } from '../model/types/DevicesTypes.ts'
import postDeviceParams from '../../Auth/api/postDeviceParams.ts'
import { errorNotification } from '../../../shared/ui/Notifications'
import { useDispatch } from 'react-redux'
import { devicesActions } from '../model/slices/devicesSlice.ts'

const DeviceCard = ({
  name,
  image,
  roomName,
  params,
  active,
  deviceType,
  id,
}: DeviceCardProps) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [deviceParams, setDeviceParams] = useState<Params>(params)
  const dispatch = useDispatch()

  const handleClickBtn = () => {
    setLoading(true)
    const newDeviceParams = { ...deviceParams, power: !deviceParams.power }
    postDeviceParams(newDeviceParams)
      .then((data) => {
        setDeviceParams(data.params)
      })
      .catch((err) => errorNotification(err))
      .finally(() => setLoading(false))
  }

  const handleClick = () => {
    if (deviceType === 'SWITCH_HUB') {
      dispatch(devicesActions.setDeviceIdClicked(id))
      dispatch(devicesActions.setDeviceModalOpened())
    }
  }

  return (
    <>
      <Card
        onClick={handleClick}
        className={`${styles.card} ${!active ? styles.disable : ''}`}
      >
        <CardHeader
          className={styles.card_header}
          title={name}
          subheader={roomName}
        />
        <CardMedia component="img" image={makeStaticPath(image)} alt={name} />
        <CardActions disableSpacing className={styles.card_actions}>
          {deviceType !== 'SWITCH_HUB' && (
            <IconButton
              size={'large'}
              color={deviceParams.power ? 'primary' : 'default'}
              loading={loading}
              onClick={handleClickBtn}
            >
              <PowerSettingsNewIcon />
            </IconButton>
          )}
        </CardActions>
      </Card>
    </>
  )
}

export default DeviceCard
