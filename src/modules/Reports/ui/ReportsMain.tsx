import { useEffect } from 'react'
import { getDevicesLogs } from '../model/api/getDevicesLogs.ts'
import { errorNotification } from '../../../shared/ui/Notifications'

const ReportsMain = () => {
  useEffect(() => {
    getDevicesLogs()
      .then((logs) => console.log(logs))
      .catch(errorNotification)
  }, [])

  return <></>
}

export default ReportsMain
