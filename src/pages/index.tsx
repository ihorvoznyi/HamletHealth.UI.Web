import Guest from './guest';
import Protected from './protected';

import { selectIsAuth } from '@app/store/entities/user';
import { useAppSelector } from '@shared/model';

const Auth = () => {
  const isAuth = useAppSelector(selectIsAuth);

  if (isAuth) {
    return <Protected />;
  }
  
  return <Guest />;
};

export default Auth;