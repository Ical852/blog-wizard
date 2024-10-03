import React from 'react';

const BottomStepper = (props) => {
  const { onPrev, onNext, onSubmit } = props;

  return (
    <div className="flex justify-between">
      {onPrev && (
        <button
          onClick={onPrev}
          className="bg-gray-500 text-white px-4 py-2 rounded">
          Back
        </button>
      )}
      {onNext && (
        <button
          onClick={onNext}
          className="bg-blue-500 text-white px-4 py-2 rounded">
          Next
        </button>
      )}
      {onSubmit && (
        <button
          onClick={onSubmit}
          className="bg-green-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      )}
    </div>
  );
};

export default BottomStepper;
