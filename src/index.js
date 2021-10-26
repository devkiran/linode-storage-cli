#!/usr/bin/env node

import cli from 'commander';
import buckets from './buckets.js';

cli
  .name('linode-object-storage')
  .description('Linode Object Storage CLI Tool')
  .usage('<command>')
  .addHelpCommand(false)
  .helpOption(false);

// Creates a bucket
cli
  .command('bucket-create')
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

// Removes a bucket
cli
  .command('bucket-remove')
  .argument('<label>', 'The bucket name to be removed.')
  .argument('<cluster>', 'The ID of the cluster this bucket exists in.')
  .description('Removes a bucket.')
  .action(buckets.remove);

cli.parse(process.argv);
