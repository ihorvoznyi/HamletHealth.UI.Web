import { FC } from 'react';

import { useInput } from '@components/ui/input/lib/hooks';

import { FieldProps } from '@components/ui/input/index.interfaces';

const TextField: FC<FieldProps> = ({ register, ...props }) => {
  const { value, handleChangeEvent } = useInput();

  return <input {...register} {...props} value={value} onChange={handleChangeEvent} />;
};

export default TextField;