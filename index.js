// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Open the Console</h1>`;

function wordblanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = '';
  result += 'The ' + myAdjective + myNoun + myVerb + myAdverb;

  return result;
}

console.log(wordblanks('dog ', 'big ', 'ran ', 'quickly.'));

var ARRAY = ['Sanjay', 12345];
console.log(ARRAY);

var array = [['Siddharth', 1234566], ['Mamma, 56543']];
console.log(array);

console.log(ARRAY[0]);
console.log(ARRAY[1]);

ARRAY[0] = 12354556;
console.log(ARRAY[0]);
console.log(ARRAY);
var some = '';
some = array[0][0];
console.log(some);

ARRAY.push([666, 777]);

console.log(ARRAY);
