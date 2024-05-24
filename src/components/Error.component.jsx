import React from "react";

const ErrorComponent = ({ children }) => {
  return (
    <div className="border border-red-200 w-full text-center text-red-400 bg-red-50 shadow">
      {children}
    </div>
  );
};

export default ErrorComponent;
