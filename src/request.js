import fetch, { Headers } from 'node-fetch';

const accessToken =
  '4c4bd3c5ed75e81ee4793ba78c421b736e6497dd54e66ea6e486cfc13767724d';

const makeRequest = async (method, url, body = null) => {
  const headers = new Headers({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
  });

  const params = {
    method: method,
    headers: headers,
  };

  if (body) {
    params['body'] = JSON.stringify(body);
  }

  const response = await fetch(url, params);

  return await response.json();
};

export default makeRequest;
