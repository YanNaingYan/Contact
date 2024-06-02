import { Login, Register } from "../../service/auth.service";

export const LoginAction = async (dispatch, formData) => {
  const res = await Login(formData);

  dispatch({ type: "process" });

  if (res.data.success) {
    dispatch({ type: "login", payload: res.data });
  } else {
    dispatch({ type: "error", payload: res.data.msg });
    console.log(res.data);
  }
};

export const RegisterAction = async (dispatch, formData) => {
  const res = await Register(formData);

  dispatch({ type: "process" });
  if (res.data?.success) {
    dispatch({ type: "register", payload: res.data });
  } else {
    dispatch({ type: "error", payload: res.msg });
    console.log(res);
  }
};
