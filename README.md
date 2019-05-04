# Jarvis
Features on Cipher Hub Discord Community to have interactive introductory session with the User

## Some useful code blocks for bot.js 
&ensp;&ensp;_Only the codes which are not available in the [documentation](https://discord.js.org/#/docs/main/stable/general/welcome)._

> Fetch data from another local JSON file
```
const fs = require('fs');
let replies = JSON.parse(fs.readFileSync('replies.json'));
```
> Send DM to new guild member
```
client.users.get(member.id).send(`Hi ${member.user.username}, ${replies.new_member}`);
```
