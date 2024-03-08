import { useContext } from 'react';
import { ActivitiesContext } from '../context';

export const useActivitiesContext = () => {
  const ctx = useContext(ActivitiesContext);
  if (!ctx) {
    throw new Error('useActivitiesContext hook have to be used inside component with ActivitiesContext.');
  }
  return ctx;
};
