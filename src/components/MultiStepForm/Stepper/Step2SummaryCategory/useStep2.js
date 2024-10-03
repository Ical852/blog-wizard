import { useState } from 'react';

export const useStep2 = (props) => {
  const {
    currentBlog,
    setBlogSummary,
    nextStep,
    prevStep,
  } = props;
  const { summary, category } = currentBlog;
  const [formData, setFormData] = useState({ summary, category });

  const handleNext = () => {
    if (formData.summary && formData.category) {
      setBlogSummary(formData);
      nextStep();
    } else {
      alert('Fill all field first!.');
    }
  };

  return {
    formData,
    setFormData,
    prevStep,
    handleNext,
  }
}