import type { DeviceData, NewOutputData } from './DevicesTypes.ts'

export type Props = {
  onClick: () => void
}

export type AddDeviceState = {
  deviceToken: string
  modalOpened: boolean
  step: number
}

export type PatchedData = {
  patchedOutput: number | null
  patchedRoomId: number | null
  patchedName: string
  patchedDeviceId: number | null
  patchedId: number | null
}

export type DevicesState = {
  devicesUpdate: boolean
  devices: Array<DeviceData>
  deviceModalOpened: boolean
  deviceIdClicked: number | null
  newOutputData: NewOutputData
  patchedData: PatchedData
  formOpened: boolean
}

export type FormValues = {
  roomId: number | null
  deviceId: number | null
  name: string
}
