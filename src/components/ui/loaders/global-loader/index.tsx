import { createPortal } from 'react-dom';

import { Loader } from '../loader';

import { useAppSelector } from '@shared/model';
import { selectIsGlobalLoading } from '@app/store';

import { classes } from './index.tailwind';

export const GlobalLoader = () => {
  const isLoading = useAppSelector(selectIsGlobalLoading);

  return createPortal(
    isLoading ? (
      <div className={classes.container}>
        <Loader styles={classes.loader} />
      </div>
    ) : null, 
    document.getElementById('global-loader')!);
};
