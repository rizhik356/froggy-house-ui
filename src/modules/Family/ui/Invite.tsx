import { useSearchParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Box, Typography, CircularProgress, Button } from '@mui/material'
import { addMemberFromInvite } from '../model/api/addMemberFromInvite.ts'
import successNotification from '../../../shared/ui/Notifications/sucessNotification.ts'
import { errorNotification } from '../../../shared/ui/Notifications'

const Invite = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>(
    'loading',
  )
  const [message, setMessage] = useState<string>('')
  const [countdown, setCountdown] = useState<number>(3) // Добавляем состояние для отсчета

  const processInvite = (token: string) => {
    addMemberFromInvite({ token })
      .then(() => {
        setStatus('success')
        setMessage('Вы успешно добавлены в семью!')
        successNotification('Вы успешно добавлены в семью!')

        // Запускаем обратный отсчет
        const countdownInterval = setInterval(() => {
          setCountdown((prev) => {
            if (prev <= 1) {
              clearInterval(countdownInterval)
              navigate('/')
              return 0
            }
            return prev - 1
          })
        }, 1000)
      })
      .catch((err) => {
        setStatus('error')
        const msg = err.response?.data?.message || 'Ошибка'
        setMessage(msg)
        errorNotification(msg)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    const token = searchParams.get('token')

    if (!token) {
      setStatus('error')
      setMessage('Недействительная ссылка')
      setLoading(false)
      return
    }

    processInvite(token)
  }, [])

  if (loading) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <CircularProgress size={50} />
        <Typography sx={{ mt: 2 }}>Обработка приглашения...</Typography>
      </Box>
    )
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      p={3}
      textAlign="center"
    >
      {status === 'success' ? (
        <>
          <Typography variant="h5" color="green" gutterBottom>
            ✓ Успешно!
          </Typography>
          <Typography sx={{ mb: 3 }}>{message}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Закрывается через {countdown} секунд{countdown !== 1 && 'ы'}...
          </Typography>
          <CircularProgress size={30} />
        </>
      ) : (
        <>
          <Typography variant="h5" color="red" gutterBottom>
            Ошибка
          </Typography>
          <Typography sx={{ mb: 3 }}>{message}</Typography>
          <Button
            variant="contained"
            onClick={() => navigate('/')}
            sx={{ mt: 2 }}
          >
            На главную
          </Button>
        </>
      )}
    </Box>
  )
}

export default Invite
