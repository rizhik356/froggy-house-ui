import type { FormValues, PatchedData } from './AddNewDeviceTypes.ts'

export type Params = {
  power: boolean
}

export type DeviceDefaultParams = {
  active: boolean
  deviceType: string
  id: number
  name: string
  roomId: number
  roomName: string
  params: Params
  image: string
  deviceId: number
}

export type HubDevice = DeviceDefaultParams & {
  output: number
  parentId: number
}

export type NewOutputData = {
  output: number | null
  parentId: number | null
}

export type OutputData = {
  output: number
  parentId: number
}

export type DeviceData = DeviceDefaultParams & {
  children?: HubDevice[]
}

export type NewHubData = FormValues & OutputData

export type DeviceCardProps = DeviceData & { parentId?: number }

export type DeviceModalProps = {
  onFinish: (outputs: HubDevice[]) => void
  patch?: boolean
}

export type ListFunc = (id: number) => void

export type PatchOutputData = Omit<NewHubData, 'output'> & {
  id: number
}

export type ListPatchFunc = (data: PatchedData) => void
