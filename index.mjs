import { Client, GatewayIntentBits } from "discord.js";
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

import { configDotenv } from "dotenv";

client.on("messageCreate", (message) => {
  console.log(message.content);
});
client.on("messageCreate", (message) => {
    if(message.author.bot) return;
    message.reply({
        content: `hey! ${message.author} welcome to elite coders`
    })
  });

  client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'ping') {
        console.log(interaction);
        await interaction.reply('pong');
    } else if (commandName === 'currenttime') {
        const currentTime = new Date().toLocaleTimeString();
        console.log(interaction);
        await interaction.reply(`Current time is ${currentTime}`);
    } else {
        console.log(interaction);
        await interaction.reply('I did not understand');
    }
});



console.log("This is my token : ", process.env.token);

// client.login(process.env.token)

client.login(
  "MTI2MTY2NTIxNDUxNzA4NDI0MQ.GmjBlF.lo1gJ9uEbaiCAtk7XBaTEgBe2HlJGNvv1MLTUg"
);
