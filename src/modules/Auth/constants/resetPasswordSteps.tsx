import Step1 from '../ui/PasswordResetSteps/Step1.tsx'
import Step2 from '../ui/PasswordResetSteps/Step2.tsx'
import Step3 from '../ui/PasswordResetSteps/Step3.tsx'

const resetPasswordSteps = [
  { component: <Step1 /> },
  { component: <Step2 /> },
  { component: <Step3 /> },
]

export { resetPasswordSteps }
