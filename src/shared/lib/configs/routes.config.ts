export const appRoutes = {
  index: '/',
  greeting: '/greeting',
  dashboard: '/dashboard',
  addPatient: '/add-patient',
  myPatients: '/my-patients',
  patient: '/my-patients/:id',
  patients: '/patients',
  auth: {
    signUp: '/sign-up',
    signIn: '/sign-in',
    verify: '/verify',
    forgotPass: '/forgot-password'
  },
} as const;
