import { AuthWrapper } from '../../../wrappers/AuthWrapper'
import { Login, SignUp, ResetPassword } from '../../../../modules/Auth'
import { paths } from '../../../../constants'

const AuthGroup = () => {
  return [
    {
      element: <AuthWrapper />,
      children: [
        { element: <Login />, path: paths.AUTH.LOGIN },
        { element: <SignUp />, path: `${paths.AUTH.REGISTER}/:id` },
        {
          element: <ResetPassword />,
          path: `${paths.AUTH.RESET_PASSWORD}/:id`,
        },
      ],
    },
  ]
}

export default AuthGroup
