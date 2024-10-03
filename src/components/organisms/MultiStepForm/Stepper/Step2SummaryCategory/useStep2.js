import { useState, useCallback, useMemo } from 'react';

export const useStep2 = (props) => {
  const {
    currentBlog,
    setBlogSummary,
    nextStep,
    prevStep,
  } = props;
  const { summary, category } = currentBlog;
  const options = useMemo(() => ['Tech', 'Lifestyle', 'Business'], []);
  const [formData, setFormData] = useState({ summary, category });

  const handleNext = useCallback(() => {
    if (formData.summary && formData.category) {
      setBlogSummary(formData);
      nextStep();
    } else {
      alert('Fill all field first!.');
    }
  }, [formData]);

  const handlePrev = useCallback(() => {
    setBlogSummary(formData);
    prevStep();
  }, [formData]);

  return {
    options,
    formData,
    setFormData,
    handlePrev,
    handleNext,
  }
}