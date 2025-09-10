import { store } from '../../app/store'

const makeRefreshParams = () => {
  const access_token = store.getState().auth.token
  const refresh_token = localStorage.getItem('refresh_token') as string

  return { access_token, refresh_token }
}

export { makeRefreshParams }
