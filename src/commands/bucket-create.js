// Object Storage Bucket Create

import { Command } from 'commander';
import buckets from '../buckets.js';

const program = new Command('bucket-create');

program
  .argument('<label>', 'The name for this bucket.')
  .argument(
    '<cluster>',
    'The ID of the Cluster where this bucket should be created.'
  )
  .argument('<acl>', 'The Access Control Level of the bucket.')
  .option(
    '--enable-cors',
    'The bucket will be created with CORS enabled.',
    false
  )
  .description('Creates a bucket.')
  .action(buckets.create);

export default program;
