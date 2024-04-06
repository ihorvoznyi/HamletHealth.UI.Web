import React, { ChangeEvent, PropsWithChildren, createContext, useState } from 'react';

import { UseFormRegisterReturn } from 'react-hook-form';

import { InputTypes } from '@components/ui/input/index.interfaces';

interface IInputContext {
	value: string;
	type: InputTypes;
	isFocus: boolean;

	setValue: (inputValue: string) => void;
	setIsFocus: (isFocus: boolean) => void;
	handleChangeEvent: (event: ChangeEvent<HTMLInputElement>) => void;
}

interface PropsType extends PropsWithChildren {
	type: InputTypes;
	register: UseFormRegisterReturn;
}

export const InputContext = createContext<IInputContext>({
	value: '',
	type: 'text',
	isFocus: false,

	setValue: () => {},
	setIsFocus: () => {},
	handleChangeEvent: () => {},
});

export const InputProvider: React.FC<PropsType> = ({ children, type, register }) => {
	const [value, setValue] = useState('');
	const [isFocus, setIsFocus] = useState(false);

	const handleChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
		register.onChange(event);
		setValue(event.target.value);
	};

	const defaultValue = {
		type,
		value,
		isFocus,
		setValue,
		setIsFocus,
		handleChangeEvent,
	};

	return <InputContext.Provider value={defaultValue}>{children}</InputContext.Provider>;
};
