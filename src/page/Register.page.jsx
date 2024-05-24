import React, { useEffect, useState } from "react";
import {
  ButtonComponent,
  ContainerComponent,
  ErrorComponent,
  FormComponent,
  LoadingComponent,
  PreventComponent,
} from "../components";
import { useNavigate } from "react-router-dom";
import { Register } from "../service/auth.service";
import UseApi from "../hook/UseApi";
import { useDispatch, useSelector } from "react-redux";
import { RegisterAction } from "../store/action/auth.action";

const RegisterPage = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((store) => store.auth);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  useEffect(() => {
    if (data) {
      nav("/");
    }
  }, [data]);

  const handleInputChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    RegisterAction(dispatch, formData);
  };

  return (
    <PreventComponent pass={"/home"} check={localStorage.getItem("auth")}>
      <ContainerComponent>
        {loading ? (
          <LoadingComponent />
        ) : (
          <div
            className="w-[400px] h-full flex flex-col  justify-center items-center
       select-none"
          >
            <div className=" h-auto">
              <h1 className="text-2xl font-bold text-center mb-8">
                Register Your Contact
              </h1>
            </div>
            {error && <ErrorComponent>{error}</ErrorComponent>}
            <form className="mx-2 w-full" onSubmit={handleSubmit}>
              <FormComponent
                value={formData.name}
                onChange={handleInputChange}
                name={"name"}
                type={"text"}
                label={"Enter Your Name"}
              />
              <FormComponent
                value={formData.email}
                onChange={handleInputChange}
                name={"email"}
                type={"email"}
                label={"Enter Your Email"}
                placeholder={"example@gmail.com"}
              />
              <FormComponent
                value={formData.password}
                onChange={handleInputChange}
                name={"password"}
                type={"password"}
                label={"Enter Your Password"}
              />
              <FormComponent
                value={formData.password_confirmation}
                onChange={handleInputChange}
                name={"password_confirmation"}
                type={"password"}
                label={"Confirm Your Password"}
              />
              <p>
                Already have an account?
                <span
                  className="text-gray-600 underline hover:text-gray-800 cursor-pointer"
                  onClick={(params) => {
                    nav("/");
                  }}
                >
                  Login In
                </span>
              </p>
              <ButtonComponent>Register Now</ButtonComponent>
            </form>
          </div>
        )}
      </ContainerComponent>
    </PreventComponent>
  );
};

export default RegisterPage;
