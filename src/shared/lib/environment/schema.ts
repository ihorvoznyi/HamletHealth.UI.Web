import * as yup from 'yup';

export const environmentSchema = yup.object({
  VITE_API_URL: yup.string().required(),
});
