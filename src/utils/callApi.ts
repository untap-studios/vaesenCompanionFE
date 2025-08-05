import axios from "axios";

export const callApi = async (endpoint: string, method: string = 'GET', body?: any) => {
  const token = localStorage.getItem('token');
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await axios({
    url: `http://localhost:8080/api/${endpoint}`,
    method,
    headers,
    data: body,
  });

  if (!response.status) {
    throw new Error(`API call failed with status ${response.status}`);
  }

  return response.data;
}