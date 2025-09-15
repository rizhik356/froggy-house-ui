import type { DeviceData } from '../model/types/DevicesTypes.ts'
import DeviceCard from '../ui/DeviceCard.tsx'
import type { ReactNode } from 'react'

const makeDevices = (devices: DeviceData[]): ReactNode[] => {
  return devices
    .map((item, index): ReactNode => {
      const deviceCard = <DeviceCard {...item} key={String(item.id) + index} />

      if (item?.children && item.children.length > 0) {
        return [deviceCard, ...makeDevices(item.children)]
      }

      return deviceCard
    })
    .flat()
}

export { makeDevices }
