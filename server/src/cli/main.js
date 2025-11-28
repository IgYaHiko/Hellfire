#!/usr/bin/env node

import dotenv from "dotenv";

import chalk from "chalk";
import figlet from "figlet";
import { Command } from "commander";
import gradient from 'gradient-string'
import { login, logout, whoami } from  './commands/auth/login.js'


import { wakeUp } from "./commands/ai/wakeUp.js";

dotenv.config();

async function main() {
    const banner = `
██╗  ██╗███████╗██╗     ██╗     ███████╗██╗██████╗ ███████╗
██║  ██║██╔════╝██║     ██║     ██╔════╝██║██╔══██╗██╔════╝
███████║█████╗  ██║     ██║     █████╗  ██║██████╔╝█████╗  
██╔══██║██╔══╝  ██║     ██║     ██╔══╝  ██║██╔══██╗██╔══╝  
██║  ██║███████╗███████╗███████╗██║     ██║██║  ██║███████╗ 
╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝
                                                           
    `
    const figur = `
        ⢀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣷⣮⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣻⣿⣿⣿⣿⣿⠂⠀⠀
⠀⠀⠀⠀⠀⠀⣠⣿⣿⣿⣿⣿⠋⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⢸⣧⠁⠀⠀⠀
⠀⡀⠀⠀⠀⠀⢸⣿⣿⣿⣸⣿⣷⣄⠀⠀
⠀⠈⠫⠂⠀⠀⠊⣿⢿⣿⡏⣿⠿⠟⠀⠀
⠀⠀⠀⠀⠱⡀⠈⠁⠀⢝⢷⡸⡇⠀⠀⠀
⠀⠀⠀⠀⢀⠇⠀⠀⢀⣾⣦⢳⡀⠀⠀⠀
⠀⠀⠀⢀⠎⠀⢀⣴⣿⣿⣿⡇⣧⠀⠀⠀
⠀⢀⡔⠁⠀⢠⡟⢻⡻⣿⣿⣿⣌⡀⠀⠀
⢀⡎⠀⠀⠀⣼⠁⣼⣿⣦⠻⣿⣿⣷⡀⠀
⢸⠀⠀⠀⠀⡟⢰⣿⣿⡟⠀⠘⢿⣿⣷⡀
⠈⠳⠦⠴⠞⠀⢸⣿⣿⠁⠀⠀⠀⠹⣿⡧
⠀⠀⠀⠀⠀⠀⢸⣿⡇⠀⠀⠀⠀⢰⣿⡇
⠀⠀⠀⠀⠀⠀⢸⣿⡇⠀⠀⠀⠀⢸⣿⡇
⠀⠀⠀⠀⠀⠀⢸⣿⠁⠀⠀⠀⠀⢸⣿⡇
⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⣿⡇
⠀⠀⠀⠀⠀⠀⠀⣿⣆⠀⠀⠀⠀⠀⣿⣧
⠀⠀⠀⠀⠀⠀⠀⠏⢿⠄⠀⠀⠀⠐⢸⣿
    `
  const red = gradient([
  { color: "#ff0000", pos: 0 },
  { color: "#ff2b2b", pos: 0.5 },
  { color: "#ff7f7f", pos: 1 },
]);
const figred = gradient([
  { color: "#ff0000", pos: 0 },
  { color: "#ff2b2b", pos: 0.5 },
  { color: "#ff7f7f", pos: 1 },
]);

  console.log(
    red(banner) + figred(figur)
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
