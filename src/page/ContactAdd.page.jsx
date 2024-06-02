import React, { useEffect, useState } from "react";
import { ButtonComponent, FormComponent } from "../components";
import { addNewContact, editContact } from "../service/contact.service";
import { useLocation, useNavigate } from "react-router-dom";

const ContactAddPage = () => {
  const nav = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });
  useEffect(
    (params) => {
      if (location.state?.edit) {
        const { name, email, address, phone } = location.state.data;
        setFormData({ name, email, address, phone });
      }
    },
    [location]
  );
  const handleFormDataChange = (e) =>
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res;
    if (location.state?.edit) {
      res = await editContact(location.state.id, formData);
    } else {
      res = await addNewContact(formData);
    }
    if (res) {
      nav("/home");
    }
  };
  return (
    <div className="mx-auto flex justify-center z-0 h-screen w-full">
      <div className="w-3/5 h-full shadow px-6 py-7 border">
        <h1 className="font-serif text-xl mb-10 text-center">
          {location.state?.edit ? "Edit Your Contact" : "Create Your Contact"}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <FormComponent
            onChange={handleFormDataChange}
            value={formData.name}
            label={"Name"}
            type="text"
            name="name"
          />
          <FormComponent
            onChange={handleFormDataChange}
            value={formData.phone}
            label={"Phone"}
            type="text"
            name="phone"
          />
          <FormComponent
            onChange={handleFormDataChange}
            value={formData.email}
            label={"Email"}
            type="text"
            name="email"
          />
          <FormComponent
            onChange={handleFormDataChange}
            value={formData.address}
            label={"Address"}
            type="text"
            name="address"
          />
          <ButtonComponent type="submit">
            {location.state?.edit ? "Edit Contact" : "Create Contact"}
          </ButtonComponent>
        </form>
      </div>
    </div>
  );
};

export default ContactAddPage;
