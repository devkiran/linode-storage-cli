import fetch, { Headers } from 'node-fetch';
import { getAccessToken } from './token.js';

const makeRequest = async (method, url, body = null) => {
  const headers = new Headers({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getAccessToken()}`,
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
