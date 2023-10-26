import Button from '@components/ui/button';
import { ArrowRight } from '@components/ui/icons';

export const BackButton = () => {
  return (
    <Button type="inherit" onClick={() => {}}>
      back to website
      <ArrowRight />
    </Button>
  );
};
