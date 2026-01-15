const API_URLS = {
  AUTH: {
    main: '/auth',
    get SIGN_IN() {
      return `${this.main}/sign-in`
    },
    get SIGN_UP() {
      return `${this.main}/sign-up`
    },
    get CONFIRM_EMAIL() {
      return `${this.main}/confirm-email`
    },
    get CONFIRM_CODE() {
      return `${this.main}/confirm-code`
    },
    get REFRESH_TOKEN() {
      return `${this.main}/refresh-token`
    },
  },

  USERS: {
    main: '/users',
    get CHECK_LOGIN() {
      return `${this.main}/login`
    },
    get CHECK_EMAIL() {
      return `${this.main}/email`
    },
    get CONFIRM_EMAIL() {
      return `${this.main}/confirm-email`
    },
    get CONFIRM_CODE() {
      return `${this.main}/confirm-code`
    },
    get CHANGE_PASSWORD() {
      return `${this.main}/change-password`
    },
  },

  FAMILY: {
    main: '/family',
    get GET_FAMILIES() {
      return `${this.main}`
    },
    get INVITE_USER() {
      return `${this.main}/invite`
    },
    get ACCESS_INVITE() {
      return `${this.main}/access-invite`
    },
  },

  ROOMS: {
    main: '/rooms',
    get GET_ROOMS() {
      return `${this.main}`
    },
  },

  DEVICES: {
    main: '/devices',
    get GET_DEVICES_TYPES() {
      return `${this.main}/types`
    },
    get ADD_USER_DEVICE() {
      return `${this.main}/add-user-device`
    },
    get ALL_DEVICES() {
      return `${this.main}`
    },
    get POST_DEVICE_PARAMS() {
      return `${this.main}/params`
    },
  },
  OUTPUTS: {
    main: '/hub-outputs',
    get CHANGE_OUTPUT() {
      return `${this.main}`
    },
  },
}

export { API_URLS }
