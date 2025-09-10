import { store } from '../../app/store'
import { authActions } from '../../modules/Auth'

const logOut = () => {
  store.dispatch(authActions.clearAuthData())
}

export { logOut }
