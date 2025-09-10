import { authActions, type Tokens } from '../../modules/Auth'
import { store } from '../../app/store'

const addNewTokens = (tokens: Tokens) => {
  store.dispatch(authActions.setTokens(tokens))
}

export { addNewTokens }
