const Natural = require('natural');
const Ngrams = Natural.NGrams;

const Str = "Lord Shiva, along with Lord Bishnu and Lord Bramha, is belive to create Universe";
console.log(Ngrams.bigrams(Str))
console.log(Ngrams.trigrams(Str))
console.log(Ngrams.ngrams(Str, 5))