import type {
  AddDeviceState,
  DevicesState,
} from '../model/types/AddNewDeviceTypes.ts'

export const addNewDeviceStep1InitialValues = {
  roomId: 0,
  deviceId: 0,
  name: '',
}

export const addDeviceSLiceInitialValue: AddDeviceState = {
  servicesData: {
    rooms: [],
    devicesTypes: [],
  },
  deviceToken: '',
  modalOpened: false,
  step: 0,
}

export const devicesSLiceInitialValues: DevicesState = {
  devicesUpdate: true,
  devices: [],
}
