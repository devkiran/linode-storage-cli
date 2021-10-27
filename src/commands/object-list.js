// Object Storage Bucket Contents List

import { Command } from 'commander';
import objects from '../objects.js';

const program = new Command('object-list');

program
  .argument('<label>', 'The bucket name.')
  .argument('<cluster>', 'The ID of the cluster this bucket exists in.')
  .description('Returns the contents of a bucket.')
  .action(objects.getAll);

export default program;
