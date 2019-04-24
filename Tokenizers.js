const natural = require('natural');
const string = "Let's! Tokenize words using Natural.js";
const finnis = "Mikä sinun nimesi on?";

const wordtokenizer = new natural.WordTokenizer();
const puncttokenizer = new natural.WordPunctTokenizer();
const sentence = new natural.SentenceTokenizer();
const caseTo = new natural.CaseTokenizer();
const tree = new natural.TreebankWordTokenizer();
const aggressive = new natural.AggressiveTokenizer();
const language = new natural.OrthographyTokenizer({ language: "fi" });

console.log('WordTokenizer:', wordtokenizer.tokenize(string));
console.log('WordPunctTokenizer:', puncttokenizer.tokenize(string));
console.log('SentenceTokenizer:', sentence.tokenize(string));
console.log('CaseTokenizer:', caseTo.tokenize(string));
console.log('TreebankWordTokenizer:', tree.tokenize(string));
console.log('AggressiveTokenizer:', aggressive.tokenize(string));
console.log('OrthographyTokenizer:', language.tokenize(finnis));