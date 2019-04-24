const natural = require('natural');
const str = "I am trying to stemming as words";
console.log(natural.PorterStemmer.stem("words"));
console.log(natural.PorterStemmerRu.stem("падший"));
console.log(natural.PorterStemmerEs.stem("jugaría"));
console.log(natural.PorterStemmer.tokenizeAndStem(str));
console.log(natural.LancasterStemmer.tokenizeAndStem(str));