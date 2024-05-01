import { useEffect } from 'react';
import { Fragment } from 'react/jsx-runtime';

import PatientCard from './patient-card';
import { Loader } from '@components/ui/common';
import { useConnect } from './connect';

import { ToastHelper } from '@shared/lib/helpers';

import { classes } from './index.tailwind';

const PatientCardList = () => {
	const { patientsGroup, isLoading, isError } = useConnect();

	useEffect(() => {
		if (isError) {
			ToastHelper.error('Failed to load patients. Please, try again later.');
		}
	}, [isError]);

	return (
		<div className={classes.container}>
			{!isLoading ? (
				patientsGroup.map(([key, items]) => {
					const [day, weekday] = key.split(',');

					return (
						<Fragment key={key}>
							<div>
								<h2 className={classes.title}>{day}</h2>
								<p className={classes.weekday}>{weekday}</p>

								<ul className={classes.list}>
									{items.map(item => (
										<Fragment key={item.id}>
											<PatientCard patinet={item} />
										</Fragment>
									))}
								</ul>
							</div>
						</Fragment>
					);
				})
			) : (
				<Loader />
			)}
		</div>
	);
};

export default PatientCardList;
