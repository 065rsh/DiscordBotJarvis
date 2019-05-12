const fs = require('fs');

printAppender = (lineArray) => {
	finalString = "";
	lineArray.forEach(function(line) {
	  finalString += line + "\n";
	});
	return finalString.slice(0, -2);
  }

let replies = JSON.parse(fs.readFileSync('../replies.json'));
let temp = "commands";
if(replies.hasOwnProperty('welcomeNote'))
  console.log(replies.welcomeNote)
  else
	console.log('false')
	