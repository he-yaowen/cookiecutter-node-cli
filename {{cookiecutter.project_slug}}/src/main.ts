#!/usr/bin/env node

import {Command} from "commander";
import info from "../package.json";
import config from "./config";
import ConfigCommand from "./commands/ConfigCommand";

const program = new Command(info.name);
program.version(info.version).description(info.description);

program.addCommand(ConfigCommand(config));

program.parse();
