import { Login, Register } from "../../service/auth.service";

export const LoginAction = async (dispatch, formData) => {
  const res = await Login(formData);
  try {
    dispatch({ type: "process" });

    if (res.data) {
      dispatch({ type: "login", payload: res.data });
    } else {
      dispatch({ type: "error", payload: res.msg });
    }
  } catch (e) {
    dispatch({ type: "error", payload: res.msg });
  }
};

export const RegisterAction = async (dispatch, formData) => {
  const res = await Register(formData);
  try {
    dispatch({ type: "process" });
    if (res.data) {
      dispatch({ type: "register", payload: res.data });
    } else {
      dispatch({ type: "error", payload: res.msg });
    }
  } catch (e) {
    dispatch({ type: "error", payload: res.msg });
  }
};