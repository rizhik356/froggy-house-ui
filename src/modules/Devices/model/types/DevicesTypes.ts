export type Params = {
  power: boolean
}

export type DeviceData = {
  active: boolean
  deviceType: string
  id: number
  name: string
  roomId: number
  roomName: string
  params: Params
  image: string
}

export type DeviceCardProps = DeviceData
