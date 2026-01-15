import { Outlet } from 'react-router'
import { paths } from '../../../../constants'
import Invite from '../../../../modules/Family/ui/Invite.tsx'

const InviteGroup = () => {
  return [
    {
      element: <Outlet />,
      children: [{ path: paths.FAMILY.INVITE, element: <Invite /> }],
    },
  ]
}

export default InviteGroup
