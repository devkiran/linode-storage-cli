#!/usr/bin/env node

import { Command } from 'commander';
import bucketCreate from '../src/commands/bucket-create.js';
import bucketList from '../src/commands/bucket-list.js';
import bucketRemove from '../src/commands/bucket-remove.js';
import bucketView from '../src/commands/bucket-view.js';
import objectList from '../src/commands/object-list.js';
import setToken from '../src/commands/setToken.js';

const cli = new Command();

cli
  .name('los')
  .description('Linode Object Storage CLI Tool')
  .usage('<command>')
  .addHelpCommand(false)
  .helpOption(false);

cli.addCommand(setToken);
cli.addCommand(bucketList);
cli.addCommand(bucketView);
cli.addCommand(bucketCreate);
cli.addCommand(bucketRemove);
cli.addCommand(objectList);

cli.parse(process.argv);
