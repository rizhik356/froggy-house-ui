export type ServiceItem = { value: number; label: string }

export type ServiceData = Array<ServiceItem>

export type ServicesData = { rooms: ServiceData; devicesTypes: ServiceData }

export type State = {
  rooms: ServiceData
  devicesTypes: ServiceData
}
