// Object Storage Bucket View

import { Command } from 'commander';
import buckets from '../buckets.js';

const program = new Command('bucket-view');

program
  .argument('<label>', 'The bucket name.')
  .argument('<cluster>', 'The ID of the cluster this bucket exists in.')
  .description('Returns a single bucket.')
  .action(buckets.getOne);

export default program;
