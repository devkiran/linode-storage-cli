import Preferences from 'preferences';

const appId = 'linode.storage.cli.config';

export const setAccessToken = (accessToken) => {
  new Preferences(appId, {
    accessToken: accessToken,
  });
};

export const getAccessToken = () => {
  const config = new Preferences(appId);

  return config.accessToken;
};
