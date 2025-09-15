import { Dialog, List, Button } from '@mui/material'
import { useAppSelector } from '../../../app/hooks/storeHooks.ts'
import { useDispatch } from 'react-redux'
import { devicesActions } from '../model/slices/devicesSlice.ts'

import DeviceModalForm from './DeviceModalForm.tsx'
import { useEffect, useMemo, useState } from 'react'
import type {
  HubDevice,
  ListFunc,
  ListPatchFunc,
} from '../model/types/DevicesTypes.ts'
import { makeListOutputs } from '../utils/makeListOutputs.tsx'
import { deleteHub } from '../model/api/deleteHub.ts'
import { errorNotification } from '../../../shared/ui/Notifications'
import styles from '../scss/styles.module.scss'

const DeviceModal = () => {
  const [outputs, setOutputs] = useState<HubDevice[]>([])
  const [patched, setPatched] = useState<boolean>(false)
  const { deviceModalOpened, devices, deviceIdClicked, formOpened } =
    useAppSelector((state) => state.devices)
  const dispatch = useDispatch()

  useEffect(() => {
    if (deviceIdClicked) {
      const currentDevice = devices.find(({ id }) => id === deviceIdClicked)
      const children = currentDevice?.children || []
      setOutputs(children)
    }
  }, [deviceIdClicked])

  const handleDeleteClick: ListFunc = (id) => {
    deleteHub(id)
      .then((data) => {
        setOutputs(data)
        dispatch(devicesActions.startUpdateDevices())
        dispatch(devicesActions.setFormClosed())
      })
      .catch((err) => {
        errorNotification(err)
      })
  }

  const handlePatchClick: ListPatchFunc = (data) => {
    setPatched(true)
    dispatch(devicesActions.setPatchedData(data))
    dispatch(devicesActions.setFormOpen())
  }

  const handleAddNewOutputClick = () => {
    const newHubOutputData = {
      parentId: deviceIdClicked as number,
      output: outputs.length + 1,
    }
    dispatch(devicesActions.setNewOutputData(newHubOutputData))
    const renderFormFunc = !formOpened
      ? devicesActions.setFormOpen
      : devicesActions.setFormClosed

    dispatch(renderFormFunc())
  }

  const handleUpdate = (outputs: HubDevice[]) => {
    setOutputs(outputs)
    dispatch(devicesActions.startUpdateDevices())
    dispatch(devicesActions.setFormClosed())
  }

  const renderOutputs = useMemo(() => {
    return makeListOutputs(outputs, handleDeleteClick, handlePatchClick)
  }, [outputs])

  const handleClose = () => {
    dispatch(devicesActions.setFormClosed())
    dispatch(devicesActions.setDeviceModalClosed())
  }

  return (
    <Dialog
      open={deviceModalOpened}
      maxWidth={'sm'}
      fullWidth={true}
      onClose={handleClose}
    >
      <List>{renderOutputs}</List>
      {outputs.length <= 3 && (
        <Button className={styles.add_btn} onClick={handleAddNewOutputClick}>
          Добавить вывод
        </Button>
      )}
      {formOpened && (
        <DeviceModalForm onFinish={handleUpdate} patch={patched} />
      )}
    </Dialog>
  )
}

export default DeviceModal
