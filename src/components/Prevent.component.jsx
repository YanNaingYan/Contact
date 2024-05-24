import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PreventComponent = ({ pass, children, check }) => {
  const nav = useNavigate();
  useEffect((params) => {
    if (check) {
      nav(pass);
    }
  }, []);

  return <>{children}</>;
};

export default PreventComponent;
