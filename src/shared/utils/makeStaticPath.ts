const makeStaticPath = (path: string) => {
  return `${import.meta.env.VITE_BASE_URL}/static/${path}`
}

export default makeStaticPath
