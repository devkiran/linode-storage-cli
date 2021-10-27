// Add the Linode Personal Access Token

import { Command } from 'commander';
import { setAccessToken } from '../token.js';

const program = new Command('config');

program
  .argument('accessToken', 'Personal Access Token')
  .description('Add the Linode Personal Access Token.')
  .action(setAccessToken);

export default program;
