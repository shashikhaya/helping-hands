import React, { useState } from "react";
import { getCoords } from "../helpers";

const RegistrationForm = ({ onLoginClick, onFormSubmit }) => {
  const [errors, setErrors] = useState({});
  const [role, setRole] = useState("user");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [postcode, setPostcode] = useState("");
  const [coords, setCoords] = useState([]);
  const [password, setPassword] = useState("");

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePostcodeChange = (e) => {
    setPostcode(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validatePostcode = (e) => {
    getCoords(e.target.value)
      .then((coordinates) => {
        setCoords(coordinates);
        setErrors(Object.assign({}, errors, { postcode: "" }));
      })
      .catch((error) => {
        setCoords([]);
        setErrors(Object.assign({}, errors, { postcode: error.message }));
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(role, username, email, coords, password);
  };

  return (
    <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white sm:px-6 md:px-8 lg:px-10">
      <div className="self-center text-xl font-light text-gray-600 sm:text-2xl">
        Register
      </div>
      <div className="mt-8">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <div className="flex justify-center mt-2">
              <input
                type="radio"
                name="role"
                value="user"
                checked={role === "user"}
                onChange={handleRoleChange}
              />
              <span className="ml-2">user</span>
              <input
                type="radio"
                className="ml-4"
                name="role"
                value="helper"
                checked={role === "helper"}
                onChange={handleRoleChange}
              />
              <span className="ml-2">helper</span>
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <div className="flex relative">
              <span className="rounded-l-md inline-flex items-center px-3 border-t bg-white border-l border-b border-gray-300 text-gray-500 shadow-sm text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <input
                type="text"
                className="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="username"
                onChange={handleUsernameChange}
              />
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <div className="flex relative">
              <span className="rounded-l-md inline-flex items-center px-3 border-t bg-white border-l border-b border-gray-300 text-gray-500 shadow-sm text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
              <input
                type="email"
                className="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="email"
                onChange={handleEmailChange}
              />
            </div>
          </div>
          <div className="flex flex-col mb-2">
            {errors.postcode && (
              <p className="mb-2 text-red-500">
                <strong>{errors.postcode}</strong>
              </p>
            )}
            <div className="flex relative">
              <span className="rounded-l-md inline-flex items-center px-3 border-t bg-white border-l border-b border-gray-300 text-gray-500 shadow-sm text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </span>
              <input
                type="text"
                className="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="postcode"
                onChange={handlePostcodeChange}
                onBlur={validatePostcode}
              />
            </div>
          </div>
          <div className="flex flex-col mb-6">
            <div className="flex relative">
              <span className="rounded-l-md inline-flex items-center px-3 border-t bg-white border-l border-b border-gray-300 text-gray-500 shadow-sm text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>
              <input
                type="password"
                className="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="password"
                onChange={handlePasswordChange}
              />
            </div>
          </div>
          <div className="flex w-full">
            <button
              type="submit"
              className="py-2 px-4 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            >
              Register
            </button>
          </div>
        </form>
      </div>
      <div className="flex items-center justify-center mt-6">
        <button
          className="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700"
          onClick={onLoginClick}
        >
          <span className="ml-2">Already have an account?</span>
        </button>
      </div>
    </div>
  );
};

export default RegistrationForm;
