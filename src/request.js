import fetch, { Headers } from 'node-fetch';

const accessToken =
  '4c4bd3c5ed75e81ee4793ba78c421b736e6497dd54e66ea6e486cfc13767724d';

const makeRequest = async (method, url, body = {}) => {
  const headers = new Headers({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
  });

  const response = await fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers,
  });

  return await response.json();
};

export default makeRequest;
