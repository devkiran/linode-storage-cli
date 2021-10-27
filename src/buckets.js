import makeRequest from './request.js';

const baseUrl = 'https://api.linode.com/v4/object-storage/buckets/';

const create = async (label, cluster, acl, options) => {
  const response = await makeRequest('POST', baseUrl, {
    label: label,
    cluster: cluster,
    acl: acl,
    cors_enabled: options.enableCors,
  });

  return console.log(response);
};

const remove = async (label, cluster) => {
  const response = await makeRequest(
    'DELETE',
    `${baseUrl}/${cluster}/${label}`
  );

  return console.log(response);
};

const list = async () => {
  const response = await makeRequest('GET', baseUrl);

  return console.log(response);
};

export default {
  create,
  remove,
  list,
};
