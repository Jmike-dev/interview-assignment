"use client";
import React, { useState } from "react";
import axios from "axios";

export const Create = ({ isVisible, onClose}) => {
  // defining states
  const url = "https://jsonplaceholder.typicode.com/users";

  const [inputData, setInputData] = useState({
    name: "",
    username: "",
    email: "",
    city: "",
    phone: "",
  });

  // submiting input to api
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(url, { inputData })
      .then((response) =>{
        alert("added new user");
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  // if statement makes the model visible
  if (!isVisible) return null;

  // if statment makes the model disappear
  const handleClose = (e) => {
    if (e.target.id === closeModel) onClose();
  };
  return (
    // parent div
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center item-center pt-20"
      onClick={() => handleClose}
      id="closeModel"
    >
      {/* form div */}
      <form
        className="w-1/2 bg-blue-950 text-blue-300 rounded-lg flex flex-col px-6 h-2/6 sm:h-5/6"
        onSubmit={() => handleSubmit(event)}
      >
        <button
          className=" text-white  text-xl sm:text-2xl place-self-end bg-red-400 px-2 rounded-lg text-center"
          onClick={() => onClose()}
        >
          x
        </button>
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm text-blue-50">
            name
          </label>
          <input
            className="mt-2 rounded-md bg-teal-500 px-4 py-2 text-teal-950 outline-none ring-1 ring-teal-300 focus:ring-2 focus:ring-teal-100"
            type="text"
            onChange={(e) =>
              setInputData({ ...inputData, name: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="username" className="text-sm text-blue-50">
            username
          </label>
          <input
            className="mt-2 rounded-md bg-teal-500 px-4 py-2 text-teal-950 outline-none ring-1 ring-teal-300 focus:ring-2 focus:ring-teal-100"
            type="text"
            onChange={(e) =>
              setInputData({ ...inputData, username: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm text-blue-50">
            email
          </label>
          <input
            className="mt-2 rounded-md bg-teal-500 px-4 py-2 text-teal-950 outline-none ring-1 ring-teal-300 focus:ring-2 focus:ring-teal-100"
            type="text"
            onChange={(e) =>
              setInputData({ ...inputData, email: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="city" className="text-sm text-blue-50">
            city
          </label>
          <input
            className="mt-2 rounded-md bg-teal-500 px-4 py-2 text-teal-950 outline-none ring-1 ring-teal-300 focus:ring-2 focus:ring-teal-100"
            type="text"
            onChange={(e) =>
              setInputData({ ...inputData, city: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className="text-sm text-blue-50">
            phone
          </label>
          <input
            className="mt-2 rounded-md bg-teal-500 px-4 py-2 text-teal-950 outline-none ring-1 ring-teal-300 focus:ring-2 focus:ring-teal-100"
            type="text"
            onChange={(e) =>
              setInputData({ ...inputData, phone: e.target.value })
            }
          />
        </div>
        <button
          type="submit"
          className="bg-purple-600 rounded-md text-white p-2 mt-4"
        >
          submit
        </button>
      </form>
    </div>
  );
};
