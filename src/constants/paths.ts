const paths = {
  MAIN: '/',
  AUTH: {
    LOGIN: '/login',
    REGISTER: '/sign-up',
    CONFIRM_PASSWORD: '/confirm-password',
    RESET_PASSWORD: '/reset-password',
  },
  SCHEDULE: '/schedule',
  REPORTS: '/reports',
  FAMILY: {
    MAIN: '/family',
    get INVITE() {
      return this.MAIN + '/invite'
    },
  },
}

export { paths }
