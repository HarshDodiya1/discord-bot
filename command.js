import 'dotenv/config';
import { REST, Routes } from "discord.js";

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
  {
    name: "currenttime",
    description: "gives the currenttime",
  },
];

const rest = new REST({ version: "10" }).setToken(
  process.env.token
);

try {
  console.log("Started refreshing application (/) commands.");

  await rest.put(Routes.applicationCommands("1261665214517084241"), { body: commands });

  console.log("Successfully reloaded application (/) commands.");
} catch (error) {
  console.error(error);
}
