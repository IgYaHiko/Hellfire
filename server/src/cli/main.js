#!/usr/bin/env node

import dotenv from "dotenv";

import chalk from "chalk";
import figlet from "figlet";
import { Command } from "commander";

import { login, logout, whoami } from  './commands/auth/login.js'


import { wakeUp } from "./commands/ai/wakeUp.js";

dotenv.config();

async function main() {
  console.log(
  chalk.redBright.bold(
    chalk.red(
      figlet.textSync("HELLFIRE_CLI", {
        font: "Standard",
        horizontalLayout: "full",
      })
    )
  )
);
  console.log(
  chalk.redBright.bold(
    "🔥⚡ Welcome to the Cult — Exchange Your Soul ⚡🔥\n"
  )
);

  const program = new Command("hellfire");

  program
    .version("0.0.1")
    .description("Hellfire CLI - Device Flow Authentication");

  // Register commands
  program.addCommand(wakeUp);
  program.addCommand(login);
  program.addCommand(logout);
  program.addCommand(whoami);

  program.action(() => {
    program.help();
  });

  program.parse();
}

main().catch((error) => {
  console.error(chalk.red("Error running Hellfire CLI:"), error);
  process.exit(1);
});
