import React from "react";

const ContainerComponent = ({ children }) => {
  return (
    <div
      className="w-[80%]  flex justify-center items-center mx-auto
   h-screen"
    >
      {children}
    </div>
  );
};

export default ContainerComponent;
