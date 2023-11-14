import { FC } from 'react'

import Input from '@components/ui/input';
import Select from '@components/ui/select';
import Button from '@components/ui/button';
import { ArrowLeftSvg, PlusSvg } from '@components/ui/icons';

import { classes } from './index.tailwind';

interface PropsType {
  onReturn: () => void;
}

const AddSupporterStage: FC<PropsType> = ({ onReturn }) => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Add a supporter</h2>
      <p className={classes.subtitle}>Add a person who will help a patient keep track of the mood.</p>
      
      <form className={classes.form}>
        <Select label="First and last name" options={[]} />
        <Select label="Relationship" options={[]} />
        <Input label="Email or phone number" />
        <Button type="outlined" styles={classes.formBtn} onClick={() => {}}>
          <PlusSvg color="#4366C5" /> 
          Add one more supporter
        </Button>
      </form>

      <div className={classes.btnsContainer}>
        <Button type="outlined" onClick={onReturn}><ArrowLeftSvg /></Button>
        <Button styles={classes.saveBtn} onClick={() => {}}>Save and finish</Button>
      </div>
    </div>
  )
}

export default AddSupporterStage