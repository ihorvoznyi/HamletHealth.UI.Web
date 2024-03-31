import PrimaryButton from '@components/ui/button';
import { ArrowRightSvg } from '@components/ui/svg';
import { APP_ROUTES } from '@configs/routes.config';
import { useNavigate } from 'react-router-dom';

export const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(APP_ROUTES.SIGN_IN);
  };

  return (
    <PrimaryButton variant="inherit" onClick={handleBack}>
      back to website
      <ArrowRightSvg />
    </PrimaryButton>
  );
};
