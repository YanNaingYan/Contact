import React from "react";
import { ButtonComponent, PreventComponent } from "../components";
import { Outlet, useNavigate } from "react-router-dom";

const HomePage = () => {
  const nav = useNavigate();
  const handleLogOut = (params) => {
    localStorage.removeItem("auth");
    nav("/");
  };
  const handleAdd = (params) => {
    nav("/home/add");
  };
  return (
    <PreventComponent check={!localStorage.getItem("auth")} pass={"/"}>
      <div className="container mx-auto h-full z-10 bg-white flex">
        <div className="w-[80%] mx-auto h-full">
          <nav className="flex sticky z-1 bg-white top-0 justify-between px-2 py-3 shadow">
            <h1 className=" font-semibold text-xl">Contact App</h1>
            <div className="space-x-5">
              <button
                onClick={handleAdd}
                className="border border-gray-700 hover:bg-gray-600 hover:text-white px-5 py-2 rounded-lg"
              >
                Add
              </button>
              <button
                className="bg-gray-700 mt-4 active:ring-2 ring-black active:bg-gray-900 px-5 rounded-lg hover:bg-gray-900 py-2  text-white"
                onClick={() => handleLogOut}
              >
                Log out
              </button>
            </div>
          </nav>

          <Outlet />
        </div>
      </div>
    </PreventComponent>
  );
};

export default HomePage;
