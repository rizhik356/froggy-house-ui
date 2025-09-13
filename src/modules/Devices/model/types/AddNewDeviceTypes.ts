import type { DeviceData } from './DevicesTypes.ts'

export type Props = {
  onClick: () => void
}

export type ServiceItem = { value: number; label: string }

export type ServiceData = Array<ServiceItem>

export type ServicesData = { rooms: ServiceData; devicesTypes: ServiceData }

export type AddDeviceState = {
  servicesData: ServicesData
  deviceToken: string
  modalOpened: boolean
  step: number
}

export type DevicesState = {
  devicesUpdate: boolean
  devices: Array<DeviceData>
}

export type FormValues = {
  roomId: number | null
  deviceId: number | null
  name: string
}
