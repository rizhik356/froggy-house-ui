import { paths } from '../../../../constants'
import MainWrapper from '../../../wrappers/MainWrapper/ui/MainWrapper.tsx'
import { Devices } from '../../../../modules/Devices'

const MainGroup = () => {
  return [
    {
      element: <MainWrapper />,
      path: paths.MAIN,
      children: [{ element: <Devices />, index: true }],
    },
  ]
}

export default MainGroup
