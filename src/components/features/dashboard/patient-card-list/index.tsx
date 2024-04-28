import { Fragment } from 'react/jsx-runtime';

import PatientCard from './patient-card';
import { useConnect } from './connect';

import { classes } from './index.tailwind';
import { Loader } from '@components/ui/common';
import { useEffect } from 'react';
import { ToastHelper } from '@shared/lib/helpers';

const PatientCardList = () => {
	const { patients, isLoading, isError } = useConnect();

	useEffect(() => {
		if (isError) {
			ToastHelper.error('Failed to load patients. Please, try again later.');
		}
	}, [isError]);

	return (
		<div className={classes.container}>
			{/* {!isLoading
				? patients.map(item => (
						<div key={item.id}>
							<h2 className={classes.title}>
								{item.month} {item.day}
							</h2>
							<p className={classes.weekday}>{item.weekday}</p>

							<div className={classes.list}>
								{item.patients.map(patient => (
									<PatientCard key={patient.id} patinet={patient} />
								))}
							</div>
						</div>
				  ))
				: null} */}

			<div>
				<h2 className={classes.title}>Jun 5</h2>
				<p className={classes.weekday}>SUN</p>
				<ul className={classes.list}>
          {!isLoading ? patients.map(item => (
            <Fragment key={item.id}>
              <PatientCard patinet={item} />
            </Fragment>
          )) : <Loader styles={{ container: 'text-center' }} />}
        </ul>
			</div>
		</div>
	);
};

export default PatientCardList;
