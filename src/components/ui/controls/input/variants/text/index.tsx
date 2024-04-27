import { FC } from 'react';

import { useInput } from '@components/ui/controls/input/lib/hooks';

import { FieldProps } from '@components/ui/controls/input/index.interfaces';

const TextField: FC<FieldProps> = ({ register, ...props }) => {
  const { handleChangeEvent } = useInput();

  return <input {...register} {...props} onChange={handleChangeEvent} />;
};

export default TextField;