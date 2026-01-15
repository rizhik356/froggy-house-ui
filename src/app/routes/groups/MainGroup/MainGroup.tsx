import { paths } from '../../../../constants'
import MainWrapper from '../../../wrappers/MainWrapper/ui/MainWrapper.tsx'
import { Devices } from '../../../../modules/Devices'
import { Family } from '../../../../modules/Family'

const MainGroup = () => {
  return [
    {
      element: <MainWrapper />,
      children: [
        { path: paths.MAIN, element: <Devices /> },
        { path: paths.FAMILY.MAIN, element: <Family /> },
      ],
    },
  ]
}

export default MainGroup
