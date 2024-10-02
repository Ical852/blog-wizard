import { useState } from 'react';
import Step1Metadata from './Step1MetaData';
import Step2SummaryCategory from './Step2SummaryCategory';
import Step3Content from './Step3Content';
import Step4Review from './Step4Review';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  switch (step) {
    case 1:
      return <Step1Metadata nextStep={nextStep} />;
    case 2:
      return <Step2SummaryCategory nextStep={nextStep} prevStep={prevStep} />;
    case 3:
      return <Step3Content nextStep={nextStep} prevStep={prevStep} />;
    case 4:
      return <Step4Review prevStep={prevStep} />;
    default:
      return null;
  }
};

export default MultiStepForm;
