const natural = require('natural');

const nounInflector = new natural.NounInflector();
const countInflector = natural.CountInflector;

function pluralize(a) {
    console.log(`plural(${a}):`, nounInflector.pluralize(a));
}

function singularize(a) {
    console.log(`singular(${a}):`, nounInflector.singularize(a))
}
function count(a, b) {
    for (var i = a; i <= b; i++) {
        console.log(countInflector.nth(i));
    }

}

pluralize('radius');
singularize('tens');
count(15, 23)