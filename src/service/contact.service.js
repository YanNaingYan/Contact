import { api } from "./api";

export const getContactData = async () => {
  try {
    const res = await api.get("/contact");
    return res;
  } catch (e) {
    console.log(e);
  }
};
