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
  "MTI2MTY2NTIxNDUxNzA4NDI0MQ.GmjBlF.lo1gJ9uEbaiCAtk7XBaTEgBe2HlJGNvv1MLTUg"
);

try {
  console.log("Started refreshing application (/) commands.");

  await rest.put(Routes.applicationCommands("1261665214517084241"), { body: commands });

  console.log("Successfully reloaded application (/) commands.");
} catch (error) {
  console.error(error);
}
