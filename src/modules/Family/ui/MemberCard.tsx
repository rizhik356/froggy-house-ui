import {
  Avatar,
  Card,
  CardHeader,
  Chip,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import type { MemberCardProps } from '../model/types/FamilyTypes.ts'
import DeleteIcon from '@mui/icons-material/Delete'
import { deleteMemberActions } from '../model/slices/deleteMemberSlice.ts'
import { useDispatch } from 'react-redux'

const MemberCard = ({ memberInfo, isOwner }: MemberCardProps) => {
  const { member, user } = memberInfo
  const dispatch = useDispatch()

  const handleOpen = () => {
    dispatch(deleteMemberActions.setDeleteMemberInfo(memberInfo))
    dispatch(deleteMemberActions.setConfirmModalOpened())
  }

  return (
    <Card>
      <CardHeader
        sx={{
          '& .MuiCardHeader-action': {
            margin: 0,
            alignSelf: 'center',
          },
          '& .MuiCardHeader-content': {
            minWidth: 0,
          },
        }}
        avatar={<Avatar aria-label="avatar"></Avatar>}
        action={
          isOwner && (
            <IconButton aria-label="delete" onClick={handleOpen}>
              <DeleteIcon />
            </IconButton>
          )
        }
        title={
          <Stack direction={'row'} spacing={1} alignItems={'center'}>
            <Typography
              sx={{
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                display: 'block',
              }}
              variant={'body2'}
            >
              {user.login}
            </Typography>
            <Chip
              label={member.name}
              color="primary"
              variant="outlined"
              size={'small'}
            />
          </Stack>
        }
        subheader={
          <Typography
            variant="body2"
            color="text.secondary"
            noWrap
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              maxWidth: '100%',
            }}
          >
            {user.email}
          </Typography>
        }
      />
    </Card>
  )
}

export default MemberCard
