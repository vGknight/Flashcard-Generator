var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");



var firstPresident = BasicCard("Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front); 


// "George Washington"
console.log(firstPresident.back); 


var firstPresidentCloze = ClozeCard("George Washington was the first president of the United States.", "George Washington");
// var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial); 

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
// var brokenCloze = new ClozeCard("This doesn't work", "oops");
var brokenCloze = ClozeCard("This doesn't work", "oops");

var firstJob = new ClozeCard("Greg's first job was The Army", "The Army");

console.log(firstJob.partial);
console.log(firstJob.fullText);