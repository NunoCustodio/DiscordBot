import { Client } from 'discord.js';
const client = new Client();
require('dotenv').config();

client.login(process.env.TOKEN);

client.on('ready', () => {
  console.log(`Logged in as 🍕🥓 ${client.user.tag}!`);
});