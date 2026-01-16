import {
  AppBar,
  Box,
  Button,
  Dialog,
  Fab,
  FormControl,
  IconButton,
  InputLabel,
  TextField,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import styles from '../scss/styles.module.scss'
import AddIcon from '@mui/icons-material/Add'
import { useAppSelector } from '../../../app/hooks/storeHooks.ts'
import { useDispatch } from 'react-redux'
import { addMemberActions } from '../model/slices/addMemberSlice.ts'
import CloseIcon from '@mui/icons-material/Close'
import { useFormik } from 'formik'
import { useState } from 'react'
import type { FormValues } from '../model/types/AddMemberTypes.ts'
import { inviteUser } from '../model/api/inviteUser.ts'
import successNotification from '../../../shared/ui/Notifications/sucessNotification.ts'
import { errorNotification } from '../../../shared/ui/Notifications'
import { validationAddMemberSchema } from '../model/schemas/validationAddMemberSchema.ts'

const AddNewFamilyMember = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState<boolean>(false)
  const { modalOpened } = useAppSelector((state) => state.addMember)
  const { family } = useAppSelector((state) => state.family)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')) // до sm (600px)
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md')) // 600-900px
  const dialogWidth = isMobile ? '90vw' : isTablet ? '70vw' : '50vw'

  const form = useFormik({
    initialValues: { email: '', familyId: family?.id || 0, memberId: 2 },
    onSubmit: (values) => {
      handleSubmit(values)
    },
    validationSchema: validationAddMemberSchema,
  })

  const handleFabClick = () => {
    dispatch(addMemberActions.setModalOpened())
  }

  const handleClose = () => {
    dispatch(addMemberActions.setModalClosed())
    form.resetForm()
  }

  const handleSubmit = (values: FormValues) => {
    setLoading(true)
    inviteUser(values)
      .then(() => {
        successNotification('Приглашение отправлено')
        handleClose()
      })
      .catch(errorNotification)
      .finally(() => setLoading(false))
  }

  return (
    <>
      <Fab
        color="primary"
        aria-label="add"
        className={styles.fab}
        onClick={handleFabClick}
      >
        <AddIcon />
      </Fab>

      {
        <Dialog
          open={modalOpened}
          onClose={handleClose}
          sx={{
            '& .MuiDialog-paper': {
              width: dialogWidth,
            },
          }}
        >
          <Box className={styles.add_member_modal}>
            <AppBar sx={{ position: 'relative' }}>
              <Toolbar className={styles.header}>
                <Typography variant={'h6'}>
                  Добавление нового члена семьи
                </Typography>
                <IconButton
                  color="inherit"
                  onClick={handleClose}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
            <Box
              component={'form'}
              onSubmit={form.handleSubmit}
              className={styles.form}
            >
              <FormControl fullWidth>
                <TextField
                  value={form.values.email}
                  autoFocus
                  onChange={form.handleChange}
                  name={'email'}
                  fullWidth
                  label={'Email пользователя'}
                  variant={'outlined'}
                  error={form.touched.email && Boolean(form.errors.email)}
                  helperText={form.touched.email && form.errors.email}
                  onBlur={form.handleBlur}
                />
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id={'memberId'}>Тип пользователя</InputLabel>
                <Select
                  labelId={'memberId'}
                  name={'memberId'}
                  disabled
                  value={form.values.memberId}
                  onChange={form.handleChange}
                  label={'Тип пользователя<'}
                  fullWidth
                >
                  <MenuItem value={2}>Пользователь</MenuItem>
                </Select>
              </FormControl>
              <Button
                size={'large'}
                type={'submit'}
                variant={'contained'}
                loading={loading}
              >
                Отправить
              </Button>
            </Box>
          </Box>
        </Dialog>
      }
    </>
  )
}

export default AddNewFamilyMember
