import React from 'react';

const SelectInput = (props) => {
  const {
    title,
    value,
    onChange,
    options,
    placeholder,
  } = props;

  return (
    <div className="mb-4">
      <label className="block mb-2">{title}</label>
      <select
        className="border p-2 w-full"
        value={value}
        onChange={onChange}>
        <option value="">{placeholder}</option>
        {options.map((opt, index) => (
          <option
            key={index}
            value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
