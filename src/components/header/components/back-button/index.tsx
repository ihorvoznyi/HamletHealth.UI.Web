import PrimaryButton from '@components/ui/button';
import { ArrowRightSvg } from '@components/ui/svg';

export const BackButton = () => {
  return (
    <PrimaryButton type="inherit" onClick={() => {}}>
      back to website
      <ArrowRightSvg />
    </PrimaryButton>
  );
};
