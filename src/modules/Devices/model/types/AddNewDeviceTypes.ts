export type Props = {
  onClick: () => void
}

export type ServiceItem = { value: number; label: string }

export type ServiceData = Array<ServiceItem>

export type ServicesData = { rooms: ServiceData; devicesTypes: ServiceData }

export type AddDeviceState = {
  servicesData: ServicesData
}

export type FormValues = {
  roomId: number | null
  deviceId: number | null
  name: string
}
