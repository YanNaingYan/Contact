import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetSingleContact } from "../service/contact.service";
import { LoadingComponent } from "../components";

const DetailContactPage = () => {
  const { id } = useParams();
  const [items, setItems] = useState({
    loading: true,
    data: null,
    error: null,
  });
  useEffect(() => {
    (async () => {
      setItems((pre) => ({ ...pre, loading: true }));
      const res = await GetSingleContact(id);
      if (res.error) {
        setItems((pre) => ({ ...pre, loading: false, error: res.msg }));
      } else {
        setItems((pre) => ({ ...pre, loading: false, data: res }));
      }
    })();
  }, [id]);
  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      {items.loading ? (
        <LoadingComponent />
      ) : (
        <>
          {items.error ? (
            <h1>{items.error}</h1>
          ) : (
            <ul className=" list-disc p-2 mt-8 flex flex-col font-bold text-lg">
              <li className=" p-2">Name - {items.data.name}</li>
              <li className=" p-2">Phone - {items.data.phone}</li>
              <li className=" p-2">Email - {items.data.email}</li>
              <li className=" p-2">Address - {items.data.address}</li>
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default DetailContactPage;
