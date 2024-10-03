import { useState } from 'react';

export const useStep3 = (props) => {
  const {
    currentBlog,
    setBlogSummary,
    nextStep,
    prevStep,
  } = props;
  const { content } = currentBlog;
  const [formData, setFormData] = useState({ content });

  const handleNext = () => {
    if (formData.content) {
      setBlogSummary(formData);
      nextStep();
    } else {
      alert('Content can`t be empty!');
    }
  };

  return {
    formData,
    setFormData,
    prevStep,
    handleNext,
  }
}