import { FC } from 'react';

import { FieldProps } from '@components/ui/input/index.interfaces';

const TextField: FC<FieldProps> = ({ register, ...props }) => {
  return <input {...register} {...props} />;
};

export default TextField;