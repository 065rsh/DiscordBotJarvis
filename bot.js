/**
 * A bot that welcomes new guild members when they join
 */

// Import the discord.js module
const Discord = require('discord.js');
// Import the readFileSync function from Node.js
const fs = require('fs');

// Create an instance of a Discord client
const client = new Discord.Client();

// checks if the bot is ready to reply to the events happening in the guild
client.on('ready', () => {
  console.log('I am ready!');
});

// reading the file -> parsing it in JSON format -> saving it in a variable
let replies = JSON.parse(fs.readFileSync('replies.json')); 

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  // const channel = member.guild.channels.find(ch => ch.name === 'member-log');
  // // // Do nothing if the channel wasn't found on this server
  // if (!channel) return;
  // Send the message, mentioning the member
  client.users.get(member.id).send(`Hi ${member.user.username}, ${replies.new_member}`);
  // message.channel.send(`Hi ${member}, ${replies.new_member}`);
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login('NTczMjc5MTc1OTY0ODg1MDEw.XMoiKg.9hD4Ui3lhjSa9x02bVlPajqz0TA');