import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import Wrapper from './wrapper';
import FieldVariant from './variants';
import { InputProvider } from './lib/context';

import { WrapperProps } from './wrapper/index';
import { InputTypes } from './index.interfaces';

import { classes } from './index.tailwind';

interface PropsType extends Pick<WrapperProps, 'label' | 'styles'> {
	type?: InputTypes;
	error?: string;
	register: UseFormRegisterReturn;
}

export const Input: FC<PropsType> = ({ type = 'text', register, ...wrapperProps }) => {
	return (
		<InputProvider type={type} register={register}>
			<Wrapper {...wrapperProps}>
				<FieldVariant register={register} className={classes.input} />
			</Wrapper>
		</InputProvider>
	);
};
