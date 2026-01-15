import { paths } from '../../../../constants'
import MainWrapper from '../../../wrappers/MainWrapper/ui/MainWrapper.tsx'
import { Devices } from '../../../../modules/Devices'
import { Family } from '../../../../modules/Family'
import Invite from '../../../../modules/Family/ui/Invite.tsx'

const MainGroup = () => {
  return [
    {
      element: <MainWrapper />,
      children: [
        { path: paths.MAIN, element: <Devices /> },
        { path: paths.FAMILY.MAIN, element: <Family /> },
        { path: paths.FAMILY.INVITE, element: <Invite /> },
      ],
    },
  ]
}

export default MainGroup
