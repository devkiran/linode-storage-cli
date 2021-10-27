#!/usr/bin/env node

import { Command } from 'commander';
import bucketCreate from './commands/bucket-create.js';
import bucketRemove from './commands/bucket-remove.js';

const cli = new Command();

cli
  .name('los')
  .description('Linode Object Storage CLI Tool')
  .usage('<command>')
  .addHelpCommand(false)
  .helpOption(false);

cli.addCommand(bucketCreate);
cli.addCommand(bucketRemove);

cli.parse(process.argv);
