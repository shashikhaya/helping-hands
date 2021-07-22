import { getAuthHeader, handleResponse } from "../helpers";

const baseUrl = "http://127.0.0.1:8000/api/v1";

export const createTask = async (task) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", ...getAuthHeader() },
    body: JSON.stringify({ ...task }),
  };
  const response = await fetch(`${baseUrl}/tasks`, requestOptions);
  const data = handleResponse(response);
  return data;
};

export const getTasks = async () => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json", ...getAuthHeader() },
  };
  const response = await fetch(`${baseUrl}/tasks`, requestOptions);
  const data = handleResponse(response);
  return data;
};

export const updateTaskStatus = async (taskId, newStatus) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json", ...getAuthHeader() },
    body: JSON.stringify({ status: newStatus }),
  };
  const response = await fetch(`${baseUrl}/tasks/${taskId}`, requestOptions);
  const data = handleResponse(response);
  return data;
};
