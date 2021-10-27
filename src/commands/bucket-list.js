// Object Storage Bucket List

import { Command } from 'commander';
import buckets from '../buckets.js';

const program = new Command('bucket-list');

program
  .description('Returns a list of all Buckets that you own.')
  .action(buckets.list);

export default program;
