import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { addMemberFromInvite } from '../model/api/addMemberFromInvite.ts'
import successNotification from '../../../shared/ui/Notifications/sucessNotification.ts'
import { errorNotification } from '../../../shared/ui/Notifications'

const Invite = () => {
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const token = searchParams.get('token')
    if (token) {
      addMemberFromInvite({ token })
        .then(() => {
          successNotification('Вы успешно добавлены')
        })
        .catch(errorNotification)
    }
  }, [])

  return <></>
}

export default Invite
