import makeRequest from './request.js';

const baseUrl = 'https://api.linode.com/v4/object-storage/buckets/';

const getAll = async (label, cluster) => {
  const response = await makeRequest(
    'GET',
    `${baseUrl}/${cluster}/${label}/object-list`
  );

  return console.log(response);
};

export default {
  getAll,
};
