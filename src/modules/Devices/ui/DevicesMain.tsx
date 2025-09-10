import { Box } from '@mui/material'

import AddNewDeviceModal from './AddNewDeviceModal.tsx'

const DevicesMain = () => {
  return (
    <Box sx={{ position: 'relative', height: '100%', width: '100%' }}>
      <AddNewDeviceModal />
    </Box>
  )
}

export default DevicesMain
