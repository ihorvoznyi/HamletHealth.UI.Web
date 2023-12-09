import Button from '@components/ui/button';
import { ArrowRightSvg } from '@components/ui/svg';

export const BackButton = () => {
  return (
    <Button type="inherit" onClick={() => {}}>
      back to website
      <ArrowRightSvg />
    </Button>
  );
};
