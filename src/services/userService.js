import { handleResponse } from "../helpers";

const baseUrl = "http://127.0.0.1:8000/api/v1";

export const login = async (username, password) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  };
  const response = await fetch(`${baseUrl}/users/login`, requestOptions);
  const data = handleResponse(response);
  return data;
};

export const register = async (role, username, email, coords, password) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      role,
      username,
      email,
      location: { coordinates: coords },
      password,
    }),
  };
  const response = await fetch(`${baseUrl}/users/register`, requestOptions);
  const data = handleResponse(response);
  return data;
};
