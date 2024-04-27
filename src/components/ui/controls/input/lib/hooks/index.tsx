import { useContext } from 'react';

import { InputContext } from '../context';

export const useInput = () => {
	const ctx = useContext(InputContext);

	if (!ctx) {
		throw new Error();
	}

	return ctx;
};