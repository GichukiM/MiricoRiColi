// import React from 'react'

import axios from "axios";
import { useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendUrl + "/api/user/admin", {
        email,
        password,
      });

      if (response) {
        setToken(response.data.token);
      } else {
        toast.error(response.data.error);
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold mb-4 ">Mirico Ri Coli Admin Panel</h1>
        <form onSubmit={onSubmit}>
          <div className="mb-3 min-w-72">
            <p className="text-sm  font-medium text-gray-700 mb-2">
              Email Address
            </p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none"
              type="email"
              placeholder="your@email.com"
            />
          </div>
          <div className="mb-3 min-w-72">
            <p className="text-sm  font-medium text-gray-700 mb-2">Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <button
            className="mt-2 w-full py-2 bg-black text-white rounded-md"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
