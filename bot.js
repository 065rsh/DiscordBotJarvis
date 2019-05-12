const Discord = require('discord.js');
const fs = require('fs');

// Create an instance of a Discord client
const client = new Discord.Client();

// checks if the bot is ready to reply to the events happening in the guild
client.on('ready', () => {
  console.log('I am ready!');
});

printAppender = (lineArray) => {
  finalString = "";
  lineArray.forEach(function(line) {
    finalString += line + "\n";
  });
  return finalString.slice(0, -2);
}

// reading the file -> parsing it in JSON format -> saving it in a variable
let replies = JSON.parse(fs.readFileSync('replies.json'));

client.on('message', message => {
  let msg = message.content;
  let user = message.author.id; // saves the id of the user to whom this personal will be sent to

  if(msg.startsWith('!') && message.channel.name == undefined) {
    var reply = eval("replies." + msg.slice(1));  // remove '!' and makes reply = replies.commandName;

    if(replies.hasOwnProperty(msg.slice(1)))  // check whether the JSON key is available
      client.users.get(user).send(printAppender(reply));  // printAppender will fetch line wise from JSON file
    else
      client.users.get(user).send("Command error! \tType `!commands` to have a look at available commands.");
  }
});

client.on('guildMemberAdd', member => {
  client.users.get(member.id).send(`Hello ${member.user.username}${replies.welcomeNote}\n\n${replies.about}`);
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login('NTczMjc5MTc1OTY0ODg1MDEw.XMoiKg.9hD4Ui3lhjSa9x02bVlPajqz0TA');
