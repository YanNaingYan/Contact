import { api } from "./api";

export const getContactData = async () => {
  try {
    const res = await api.get("/contact", {});
    if (res.data) {
      const contactData = res.data.contacts.data;
      return contactData;
    }
  } catch (e) {
    console.log(e);
  }
};
export const addNewContact = async (formData) => {
  try {
    const res = await api.post("/contact", formData);

    if (res.data) {
      return res.data.success;
    }
  } catch (e) {
    console.log(e);
  }
};
export const GetSingleContact = async (id) => {
  try {
    const res = await api.get(`/contact/${id}`);

    if (res.data) {
      return res.data.contact;
    }
  } catch (e) {
    console.log(e);
  }
};
export const editContact = async (id, formData) => {
  try {
    const res = await api.put(`/contact/${id}`, formData);
    console.log(res);
    if (res.data) {
      return true;
    }
  } catch (e) {
    console.log(e);
  }
};

export const DeleteContact = async (id) => {
  try {
    const res = await api.delete(`/contact/${id}`);
    return res;
  } catch (e) {
    console.log(e);
  }
};
