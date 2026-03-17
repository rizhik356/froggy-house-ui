import { paths } from '../../../../constants'
import MainWrapper from '../../../wrappers/MainWrapper/ui/MainWrapper.tsx'
import { Devices } from '../../../../modules/Devices'
import { Family } from '../../../../modules/Family'
import { Reports } from '../../../../modules/Reports'

const MainGroup = () => {
  return [
    {
      element: <MainWrapper />,
      children: [
        { path: paths.MAIN, element: <Devices /> },
        { path: paths.FAMILY.MAIN, element: <Family /> },
        { path: paths.REPORTS, element: <Reports /> },
      ],
    },
  ]
}

export default MainGroup
