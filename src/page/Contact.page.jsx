import React, { useEffect, useState } from "react";
import { DeleteContact, getContactData } from "../service/contact.service";
import { ContactCardComponent, LoadingComponent } from "../components";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const [item, setItem] = useState({
    data: null,
    loading: true,
    error: null,
  });
  const [deleteItem, setDeleteItem] = useState(false);
  const handleDelete = async (id) => {
    setItem((pre) => ({ ...pre, loading: true }));
    DeleteContact(id);
    setItem((pre) => ({ ...pre, loading: false }));
    setDeleteItem((pre) => !pre);
  };
  useEffect(
    (params) => {
      (async () => {
        setItem((pre) => ({ ...pre, loading: true }));
        const res = await getContactData();

        if (res.error) {
          setItem((pre) => ({ ...pre, loading: false, error: res.msg }));
        } else {
          setItem((pre) => ({ ...pre, loading: false, data: res }));
        }
      })();
    },
    [deleteItem]
  );

  return (
    <div className="flex flex-col gap-3 mt-2 w-full items-center">
      {item.loading ? (
        <LoadingComponent />
      ) : (
        <>
          {item.error ? (
            <h1>{item.error}</h1>
          ) : (
            item.data.map((i) => (
              <ContactCardComponent
                key={i.id}
                handleDelete={handleDelete}
                data={i}
              />
            ))
          )}
        </>
      )}
    </div>
  );
};

export default ContactPage;
