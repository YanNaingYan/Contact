import React from "react";

const FormComponent = ({ type, name, label, placeholder = "", ...rest }) => {
  return (
    <div>
      <div className="flex flex-col mb-2">
        <label className="font-bold mb-1" htmlFor={name}>
          {label}
        </label>
        <input
          {...rest}
          className="px-3 rounded-md py-2 border-gray-700 border-2"
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default FormComponent;
