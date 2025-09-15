import type {
  AddDeviceState,
  DevicesState,
} from '../model/types/AddNewDeviceTypes.ts'

export const addNewDeviceStep1InitialValues = {
  roomId: null,
  deviceId: null,
  name: '',
}

export const addDeviceSLiceInitialValue: AddDeviceState = {
  deviceToken: '',
  modalOpened: false,
  step: 0,
}

export const devicesSLiceInitialValues: DevicesState = {
  devicesUpdate: true,
  devices: [],
  deviceModalOpened: false,
  deviceIdClicked: null,
  newOutputData: {
    parentId: null,
    output: null,
  },
  patchedData: {
    patchedOutput: null,
    patchedRoomId: null,
    patchedName: '',
    patchedDeviceId: null,
    patchedId: null,
  },
  formOpened: false,
}

export const deviceModalInitialValues = {
  roomId: null,
  name: '',
  deviceId: null,
}
