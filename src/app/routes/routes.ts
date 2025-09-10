import AuthGroup from './groups/AuthGroup/AuthGroup.tsx'
import MainGroup from './groups/MainGroup/MainGroup.tsx'

const routes = [...AuthGroup(), ...MainGroup()]

export { routes }
