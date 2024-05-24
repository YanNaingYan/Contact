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
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "../store/action/auth.action";

const LoginPage = () => {
  const nav = useNavigate();
  const { loading, data, error, auth } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    LoginAction(dispatch, formData);
    console.log(data);
  };
  useEffect(() => {
    if (data) {
      nav("/home");
    }
    console.log(data);
  }, [data]);

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
                Login Your Contact
              </h1>
            </div>
            {error && <ErrorComponent>{error}</ErrorComponent>}
            <form onSubmit={handleSubmit} className="mx-2 w-full">
              <FormComponent
                value={formData.email}
                onChange={handleInputChange}
                name={"email"}
                type={"email"}
                label={"Enter Your Email"}
                placeholder={"example@gmail.com"}
              />
              <FormComponent
                onChange={handleInputChange}
                name={"password"}
                type={"password"}
                label={"  Password"}
                value={formData.password}
              />
              <p>
                Not Registered?
                <span
                  className="text-gray-600 underline hover:text-gray-800 cursor-pointer"
                  onClick={(params) => {
                    nav("/register");
                  }}
                >
                  Create an account
                </span>
              </p>
              <ButtonComponent>Log In</ButtonComponent>
            </form>
          </div>
        )}
      </ContainerComponent>
    </PreventComponent>
  );
};

export default LoginPage;
