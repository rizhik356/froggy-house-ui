import { store } from '../../app/store'
import { authActions } from '../../modules/Auth'
import { paths } from '../../constants'

const logOut = () => {
  store.dispatch(authActions.clearAuthData())
  window.location.href = paths.AUTH.LOGIN
}

export { logOut }
