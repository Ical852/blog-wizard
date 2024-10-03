import { useState, useCallback } from 'react';

export const useStep3 = (props) => {
  const {
    currentBlog,
    setBlogContent,
    nextStep,
    prevStep,
  } = props;
  const { content } = currentBlog;
  const [formData, setFormData] = useState({ content });

  const handleNext = useCallback(() => {
    if (formData.content) {
      setBlogContent(formData);
      nextStep();
    } else {
      alert('Content can`t be empty!');
    }
  }, [formData]);

  const handlePrev = useCallback(() => {
    setBlogContent(formData);
    prevStep();
  }, [formData]);

  return {
    formData,
    setFormData,
    handlePrev,
    handleNext,
  }
}