import type { AddDeviceState } from '../model/types/AddNewDeviceTypes.ts'

export const addNewDeviceStep1InitialValues = {
  roomId: null,
  deviceId: null,
  name: '',
}

export const addDeviceSLiceInitialValue: AddDeviceState = {
  servicesData: {
    rooms: [],
    devicesTypes: [],
  },
}
