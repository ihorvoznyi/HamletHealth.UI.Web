import { FC, useEffect } from 'react';
import { shallowEqual } from 'react-redux';

import Input from '@components/ui/input';
import Select from '@components/ui/select';
import PrimaryButton from '@components/ui/button';
import { ArrowLeftSvg, PlusSvg } from '@components/ui/svg';

import { classes } from './index.tailwind';
import { useAppDispatch, useAppSelector } from '@shared/model';

const AddSupporterStage = () => {
  const dispatch = useAppDispatch();
  // const supporterStatus = useAppSelector(selectSupporterStageStatus);
  const supporterStatus = 'unchecked';
  // const { supporterStatus } = useAppSelector(selectStageStatuses, shallowEqual);
  
  // useEffect(() => {
  //   if (supporterStatus !== 'filled') {
  //     dispatch(setStageStatus({ stage: 'supporterStatus', status: 'checked' }));
  //   }
  //   dispatch(setCurrentStage('supporter'));
  // }, []);

  const handleNext = () => {};
  const handlePrev = () => {};
  
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Add a supporter</h2>
      <p className={classes.subtitle}>Add a person who will help a patient keep track of the mood.</p>
      
      <form className={classes.form}>
        <Select label="First and last name" options={[]} />
        <Select label="Relationship" options={[]} />
        <Input label="Email or phone number" />
        <PrimaryButton type="outlined" styles={classes.formBtn} onClick={() => {}}>
          <PlusSvg color="#4366C5" /> 
          Add one more supporter
        </PrimaryButton>
      </form>

      <div className={classes.btnsContainer}>
        <PrimaryButton onClick={handleNext} type="outlined"><ArrowLeftSvg /></PrimaryButton>
        <PrimaryButton onClick={handleNext} styles={classes.saveBtn}>Save and finish</PrimaryButton>
      </div>

      <PrimaryButton onClick={handleNext} type="outlined" styles={classes.skipBtn}>Skip this step</PrimaryButton>
    </div>
  );
};

export default AddSupporterStage;
