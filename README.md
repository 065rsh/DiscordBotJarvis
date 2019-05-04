# Jarvis
Features on Cipher Hub Discord Community to have interactive introductory session with the User

### Some useful code blocks for bot.js
&ensp;&ensp;_Only the codes which are not available in the [documentation](https://discord.js.org/#/docs/main/stable/general/welcome)._
> ``const fs = require('fs');`` <br/><br/>
  ``let replies = JSON.parse(fs.readFileSync('replies.json'));`` <br/>
  
> ```client.users.get(member.id).send(`Hi ${member.user.username}, ${replies.new_member}`);```
