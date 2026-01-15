import AuthGroup from './groups/AuthGroup/AuthGroup.tsx'
import MainGroup from './groups/MainGroup/MainGroup.tsx'
import InviteGroup from './groups/InviteGroup/InviteGroup.tsx'

const routes = [...AuthGroup(), ...MainGroup(), ...InviteGroup()]

export { routes }
