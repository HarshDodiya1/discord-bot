import 'dotenv/config';
import { Client, GatewayIntentBits } from "discord.js";
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});


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


client.login(process.env.token)


