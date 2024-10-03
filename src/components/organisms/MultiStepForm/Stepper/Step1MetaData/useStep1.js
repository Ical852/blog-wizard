import { useState, useCallback } from 'react';

export const useStep1 = (props) => {
  const {
    currentBlog,
    setBlogMetadata,
    nextStep,
  } = props;
  const { title, author } = currentBlog;
  const [formData, setFormData] = useState({ title, author });

  const handleNext = useCallback(() => {
    if (formData.title && formData.author) {
      setBlogMetadata(formData);
      nextStep();
    } else {
      alert('Fill all field first!.');
    }
  }, [formData]);

  return {
    formData,
    setFormData,
    handleNext,
  }
}