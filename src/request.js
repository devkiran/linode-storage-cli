import fetch, { Headers } from 'node-fetch';

const accessToken = '';

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
