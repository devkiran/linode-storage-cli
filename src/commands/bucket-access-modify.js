// Object Storage Bucket Access Modify

import { Command } from 'commander';
import buckets from '../buckets.js';

const program = new Command('bucket-access-modify');

program
  .requiredOption('--label <label>', 'The bucket name.')
  .requiredOption(
    '--cluster <cluster>',
    'The ID of the cluster this bucket exists in.'
  )
  .option('--acl <acl>', 'The ACL of the bucket.')
  .option('--cors <cors>', 'Enable/Disable CORS.')
  .description('Allows changing basic CORS and ACL settings.')
  .action(buckets.updateAccess);

export default program;
