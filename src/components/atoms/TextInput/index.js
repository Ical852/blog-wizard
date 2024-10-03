import React from 'react'

const TextInput = (props) => {
  const { title, value, onChange } = props;

  return (
    <div className="mb-4">
      <label className="block mb-2">{title}</label>
      <input
        type="text"
        className="border p-2 w-full"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
