import type {
  HubDevice,
  ListFunc,
  ListPatchFunc,
} from '../model/types/DevicesTypes.ts'
import {
  Avatar,
  Box,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material'
import styles from '../scss/styles.module.scss'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

const makeListOutputs = (
  outputs: HubDevice[],
  deleteFunc: ListFunc,
  patchFunc: ListPatchFunc,
) => {
  return outputs.map(({ name, roomName, output, id, roomId, deviceId }) => {
    return (
      <ListItem
        secondaryAction={
          <Box className={styles.actions_container}>
            <IconButton onClick={() => deleteFunc(id)} aria-label="delete">
              <DeleteIcon />
            </IconButton>
            <IconButton
              onClick={() =>
                patchFunc({
                  patchedOutput: output,
                  patchedName: name,
                  patchedRoomId: roomId,
                  patchedDeviceId: deviceId,
                  patchedId: id,
                })
              }
              aria-label="edit"
            >
              <EditIcon />
            </IconButton>
          </Box>
        }
      >
        <ListItemAvatar>
          <Avatar>{output}</Avatar>
        </ListItemAvatar>
        <ListItemText primary={name} secondary={roomName}></ListItemText>
      </ListItem>
    )
  })
}

export { makeListOutputs }
