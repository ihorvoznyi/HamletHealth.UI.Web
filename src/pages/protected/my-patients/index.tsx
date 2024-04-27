import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { Head, PatientList } from '@components/features/my-patients';
import { MyPatientsProvider } from '@components/features/my-patients/context';

import { useLoading } from '@hooks/useLoading';
import { useGetPatientsQuery } from '@entities/patient';

import { ToastHelper } from '@shared/lib/helpers';
import { APP_ROUTES } from '@configs/routes.config';

import { classes } from './index.tailwind';

const MyPatientsPage = () => {
  const { setGlobalLoader } = useLoading();
  const { data: patients = [], isLoading, isError } = useGetPatientsQuery();

  useEffect(() => {
    setGlobalLoader(isLoading);

    return () => {
      setGlobalLoader(false);
    };
  }, [isLoading]);

  if (isError) {
    ToastHelper.error('Failed to get list of patients.');
    return <Navigate to={APP_ROUTES.DASHBOARD} />;
  }

  return (
    <MyPatientsProvider>
      <div className={classes.container}>
        <Head total={patients.length} />
        <PatientList patients={patients} />
      </div>
    </MyPatientsProvider>
  ); 
};



export default MyPatientsPage;