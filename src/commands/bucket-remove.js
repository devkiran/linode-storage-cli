// Object Storage Bucket Remove

import { Command } from 'commander';
import buckets from '../buckets.js';

const program = new Command('bucket-remove');

program
  .argument('<label>', 'The bucket name to be removed.')
  .argument('<cluster>', 'The ID of the cluster this bucket exists in.')
  .description('Removes a bucket.')
  .action(buckets.remove);

export default program;
