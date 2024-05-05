import React from 'react';
import { MdNavigateNext } from 'react-icons/md';
import type { IconBaseProps } from 'react-icons/lib';

type PropsType = Partial<IconBaseProps>;

export const PrevIcon: React.FC<PropsType> = props => {
  return <MdNavigateNext style={{ rotate: '180deg' }} {...props} />;
};
