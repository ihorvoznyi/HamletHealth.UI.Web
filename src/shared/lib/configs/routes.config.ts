export const APP_ROUTES = {
  BASE: '/',
  GREETING: '/greeting',
  DASHBOARD: '/dashboard',
  APP_PATIENT: '/add-patient',
  MY_PATIENTS: '/my-patients',
  PATIENT: '/my-patients/:id',
  PATIENTS: '/patients',

  // Authorization
  SIGN_UP: '/sign-up',
  SIGN_IN: '/sign-in',
  VERIFY: '/verify',
  FORGOT_PASS: '/forgot-password'
} as const;
