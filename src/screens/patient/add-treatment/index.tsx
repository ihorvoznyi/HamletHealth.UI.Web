import ActivitiesMedicine from './activities';
import Diagnosis from './diagnosis';

const AddPatient = () => {
  return (
    <div className="max-w-[1440px] mx-auto text-center">
      <div className="mt-[125px] mb-[40px]">
        {/* Stages */}
        Stages
      </div>

      <h2 className="font-poppins-600 text-[26px] leading-[32px]">Add treatment plan</h2>

      <div className="flex gap-[24px] mt-[50px]">
        <Diagnosis />
        <ActivitiesMedicine />
        <Diagnosis />
      </div>
    </div>
  );
};

export default AddPatient;
