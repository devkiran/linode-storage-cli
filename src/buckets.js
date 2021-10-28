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

const getAll = async () => {
  const response = await makeRequest('GET', baseUrl);

  return console.log(response);
};

const getOne = async (label, cluster) => {
  const response = await makeRequest('GET', `${baseUrl}/${cluster}/${label}`);

  return console.log(response);
};

const updateAccess = async ({ label, cluster, acl, cors }) => {
  if (acl === undefined && cors === undefined) {
    console.log('You must provide either ACL or CORS setting.');
    return;
  }

  const params = {};

  if (acl) {
    params['acl'] = acl;
  }

  if (cors) {
    params['cors_enabled'] = cors === 'true';
  }

  const response = await makeRequest(
    'POST',
    `${baseUrl}/${cluster}/${label}/access`,
    params
  );

  return console.log(response);
};

export default {
  create,
  remove,
  getAll,
  getOne,
  updateAccess,
};
