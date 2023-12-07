import Button from '@components/ui/button';
import { classes } from './index.tailwind';
import { useNavigate } from 'react-router-dom';
import { appRoutes } from '@configs/routes.config';

const PatientsStartPage = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <img className={classes.mainImage} src="/assets/vector.png" alt="vector.png" />
      <img className={classes.leftFlower} src="/assets/flower-left.png" alt="flower" />
      <img className={classes.rightFlower} src="/assets/flower-right.png" alt="flower" />

      <div className={classes.contentContainer}>
        <h1 className={classes.title}>
          You don&rsquo;t have <br /> patients yet
        </h1>

        <p className={classes.paragraph}>
          Add patients to assign tasks and activities to them and track their progress.
        </p>

        <Button 
          styles={classes.button} 
          onClick={() => navigate(appRoutes.addPatient)}
        >
          Add new patient
        </Button>
      </div>
    </div>
  );
};

export default PatientsStartPage;