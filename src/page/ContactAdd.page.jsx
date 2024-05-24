import React, { useState } from "react";
import { ButtonComponent, FormComponent } from "../components";

const ContactAddPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });
  const handleFormDataChange = (e) =>
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="mx-auto flex justify-center z-0 h-screen w-full">
      <div className="w-3/5 h-full shadow px-6 py-7 border">
        <h1 className="font-serif text-xl mb-10 text-center">
          Create Your Contact
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
          <ButtonComponent type="submit">Create</ButtonComponent>
        </form>
      </div>
    </div>
  );
};

export default ContactAddPage;
