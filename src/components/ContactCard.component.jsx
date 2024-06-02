import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { DeleteContact } from "../service/contact.service";
const ContactCardComponent = ({ data, handleDelete }) => {
  const nav = useNavigate();
  const handleDetail = () => {
    nav(`/home/contact/${data.id}`);
  };
  const handleEdit = () => {
    nav("/home/add", { state: { edit: true, data, id: data.id } });
  };

  return (
    <div className="w-1/3  p-2 rounded-lg border border-gray-200 flex justify-between px-3 items-center">
      <button onClick={handleDetail} className="hover:bg-gray-100 w-[70%]">
        <h1>{data.name}</h1>
        <p>{data.phone}</p>
      </button>
      <div className="flex gap-3">
        <button onClick={handleEdit} className="hover:border p-2">
          <MdOutlineEdit />
        </button>
        <button className="hover:border p-2">
          <MdDelete onClick={handleDelete.bind(this, data.id)} />
        </button>
      </div>
    </div>
  );
};

export default ContactCardComponent;
