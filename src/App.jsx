import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  ContactAddPage,
  ContactPage,
  HomePage,
  LoginPage,
  RegisterPage,
} from "./page";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />}>
          <Route index element={<ContactPage />} />
          <Route path="add" element={<ContactAddPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
