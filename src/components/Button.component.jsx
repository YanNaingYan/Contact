import React from "react";

const ButtonComponent = ({ ...rest }) => {
  return (
    <button
      {...rest}
      type="submit"
      className="bg-gray-700 mt-4 active:ring-2 ring-black active:bg-gray-900 px-5 rounded-lg hover:bg-gray-900 py-2 flex justify-center items-center mx-auto text-white"
    ></button>
  );
};

export default ButtonComponent;
