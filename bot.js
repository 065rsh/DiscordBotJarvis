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
let topicBreak = "\n-------------\n";
// Create an event listener for new guild members
client.on('message', message => {
  // Send the message, mentioning the member
  let msg = message.content;
  let user = message.author.id;
  let username = message.author.username;
  switch (msg){
    case "!commands":
      client.users.get(user).send(`${replies.commands}`);
      break;
    case "-new_member":
      client.users.get(user).send(`.\n\n\nHi ${username}, Welcome to the Cipher Hub discord chat!\n\n${replies.new_member}`);
      break;
    case "!about":
      break;
  }
});
client.on('guildMemberAdd', member => {
  // console.log(member.id);
  client.users.get(member.id).send(`Hi ${member.user.username}, Welcome to the Cipher Hub discord chat!\n\n${replies.new_member}`);
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login('NTczMjc5MTc1OTY0ODg1MDEw.XMoiKg.9hD4Ui3lhjSa9x02bVlPajqz0TA');