const natural = require('natural');

// Hamming Distance Between Words
// Like Binary Hamming Distance it calculates differnece between words at respective position for similar length word

// for differnce lenth it simply returns -1
function calculateHamming(a, b) {
    if (a.length === b.length) {
        console.log(`Hamming:(${a},${b})`, natural.HammingDistance(a, b, false));
    }
    else {
        console.log('Hamming is useless in differning word lenth');
    }
}

function calculateJaroWinkler(a, b) {
    console.log(`JaroWinkler:(${a},${b})`, natural.JaroWinklerDistance(a, b));
}

function calculateLevenshteinDistance(a, b) {
    console.log(`LevenshteinDistance:(${a},${b})`, natural.LevenshteinDistance(a, b));
}

function calculateDamerauLevenshteinDistance(a, b) {
    console.log(`DamerauLevenshteinDistance:(${a},${b})`, natural.DamerauLevenshteinDistance(a, b));
}

function calculateDiceCoefficient(a, b) {
    console.log(`DiceCoefficient:(${a},${b})`, natural.DiceCoefficient(a, b));
}

calculateHamming('Kiran', 'Kisan');
calculateHamming('India', 'Pakistan');
calculateJaroWinkler('Kiran', 'Kisan');
calculateJaroWinkler('India', 'Pakistan');
calculateDamerauLevenshteinDistance('Kiran', 'Kisan');
calculateDamerauLevenshteinDistance('India', 'Pakistan');
calculateLevenshteinDistance('Kiran', 'Kisan');
calculateLevenshteinDistance('India', 'Pakistan');
calculateDiceCoefficient('Kiran', 'Kisan');
calculateDiceCoefficient('India', 'Pakistan');