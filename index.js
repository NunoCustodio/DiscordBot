const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
//const fs = require('fs');
//const dispatcher = connection.play('/sounds/coca.mp3');

client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
  console.log(`Logged in as 🍕🥓 ${client.user.tag}!`);
});
client.on('message', async (message) => {
  // If the message is "ping"
  if (message.content === 'ping') {
    // Send "pong" to the same channel
    message.channel.send('pong');
  } else {
    if (message.content === 'flour?') {
      message.channel.send('*sniff* cocaina');
      if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
        const dispatcher = connection.play('./sounds/coca.mp3');
        dispatcher.on('start', () => {
          dispatcher.setVolume(1);
        });

        dispatcher.on('error', (err) => console.log(err));

        dispatcher.on('finish', () => {
          message.member.voice.channel.leave();
        });
      }
    }
  }
});
