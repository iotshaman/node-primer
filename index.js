//--------------------------------------------------------------------------------------
// SECTION: CHEAT-SHEET PART 1 - IMPORTING FUNCTIONS / VARIABLES FROM OTHER FILES
//--------------------------------------------------------------------------------------

var numberService = require("./services/number.service");

const generateRandomInteger = numberService.GenerateRandomInteger;
const maxSafeInteger = numberService.MaxSafeInteger;

console.log("Random number generated: " + generateRandomInteger());
console.log("Max safe integer: " + maxSafeInteger + "\r\n");

//--------------------------------------------------------------------------------------
// SECTION: CHEAT-SHEET PART 2 - TRUTHINESS / FALSINESS
//--------------------------------------------------------------------------------------

// THE CONTEPT OF TRUTHINESS ALLOWS DEVELOPERS TO CHECK IF SOMETHING HAS A VALUE, OR NOT.
// IF SOMETHING IS TRUTY, IT MEANS THERE IS A VALUE IN THE VARIABLE.
// ALTERNATIVELY, IF SOMETHING DOES NOT HAVE A VALUE, IT CAN BE CALLED 'FALSY'.
// THERE ARE 4 VALUES THAT ARE CONSIDERED 'FALSY': undefined, null, 0, and '' (empty string).

// ALL OF THE BELOW VARIABLES ARE CONSIDERED 'FALSY'
let undefinedVariable;
let nullVariable = null;
let zeroVariable = 0;
let emptyStringVariable = '';

// TO CHECK IS SOMETHING IS TRUTY, YOU CAN USE THE DOUBLE-EXLAMATION POINT:
console.log("Is 'undefinedVariable' truthy? " + !!undefinedVariable);
console.log("Is 'nullVariable' truthy? " + !!nullVariable);
console.log("Is 'zeroVariable' truthy? " + !!zeroVariable);
console.log("Is 'emptyStringVariable' truthy? " + !!emptyStringVariable);

// TO CHECK IS SOMETHING IS FALSY, YOU CAN USE THE SINGLE-EXLAMATION POINT:
console.log("Is 'undefinedVariable' falsy? " + !undefinedVariable);
console.log("Is 'nullVariable' falsy? " + !nullVariable);
console.log("Is 'zeroVariable' falsy? " + !zeroVariable);
console.log("Is 'emptyStringVariable' falsy? " + !emptyStringVariable);

//--------------------------------------------------------------------------------------
// SECTION: CHEAT-SHEET PART 3 - ARRAYS
//--------------------------------------------------------------------------------------

// ARRAYS ARE DEFINED USING THE [] SYMBOLS, AND CAN STORE ANY DATA TYPE
const fruitArray = [
  'Apples',
  'Oranges',
  'Bananas',
  'Cherries',
  'Blueberries'
];

// ARRAYS HAVE SEVERAL BUILT-IN FUNCTIONS THAT YOU CAN USE TO MANIPULATE DATA

let updatedFruitArray = fruitArray.map(function(fruit) {
  // MAP TAKES A FUNCTION AS AN ARGUMENT, THEN CALLS THE FUNCTION ONCE FOR EACH ITEM IN ARRAY
  // YOU THEN CAN MAKE CHANGES TO THE ELEMENTS, AND RETURN THEM
  fruit = fruit + ' are awesome!';
  return fruit;
});
console.dir(updatedFruitArray);

let filteredFruitArray = fruitArray.filter(function(fruit) {
  // FILTER TAKES A FUNCTION AS AN ARGUMENT, THEN CALLS THE FUNCTION ONCE FOR EACH ITEM IN ARRAY
  // YOU THEN RETURN A BOOLEAN VALUE, INDICATING IF THE ELEMENT SHOULD BE INCLUDED IN THE RESUL SET
  return fruit != 'Apples';
});
console.dir(filteredFruitArray);

let cherryIndex = fruitArray.findIndex(function(fruit) {
  // FIND INDEX TAKES A FUNCTION AS AN ARGUMENT, THEN CALLS THE FUNCTION ONCE FOR EACH ITEM IN ARRAY
  // YOU THEN RETURN A BOOLEAN VALUE, IF THE CURRENT ITEM UNDER REVIEW IS THE ONE YOU ARE LOOKING FOR
  // NOTE: ARRAYS IN JAVASCRIPT ALWAYS START WITH INDEX '0' (CALLED ZERO-BASE INDEXING)
  return fruit == 'Cherries';
});
console.log("\r\nCherry index: " + cherryIndex);

// SORTING A SIMPLE ARRAY IS EASY. IF YOUR ARRAY ONLY HAS PRIMITIVES (STRING, NUMBER, DATE, ETC),
// THEN THE BUILT-IN ARRAY SORT FUNCTION DOES NOT REQUIRE ANY PARAMETERS.
var sortedFruitArray = fruitArray.sort();
console.log("\r\nSorted Array:"); 
console.dir(sortedFruitArray);

//--------------------------------------------------------------------------------------
// SECTION: CHEAT-SHEET PART 4 - COMPLEX ARRAYS (ARRAYS OF OBJECTS)
//--------------------------------------------------------------------------------------

var complexFruitArray = [
  { fruitName: 'Apples', price: 0.99 },
  { fruitName: 'Oranges', price: 0.99 },
  { fruitName: 'Bananas', price: 1.25 },
  { fruitName: 'Cherries', price: 3.99 },
  { fruitName: 'Blueberries', price: 0.88 }
];

// FINDING A SPECIFIC ELEMENT
var cherryData = complexFruitArray.find(function(fruit) {
  return fruit.fruitName == 'Cherries';
});
console.log("\r\nPrice of cherries: " + cherryData.price);

// SORTING COMPLEX ARRAYS IS A LITTLE MORE DIFFICULT, BUT STILL NOT TOO DIFFICULT.
// SINCE THE ARRAY CONTAINS OBJECTS (NOT PRIMITIVES) YOU HAVE TO TELL IT WHICH PROPERTY
// TO USE WHEN SORTING.
var sortedComplexFruitArray = complexFruitArray.sort(function(a, b) {
  // SORT TAKES AN OPTIONAL FUNCTION AS AN ARGUMENT, THEN CALLS THE FUNCTION ONCE FOR EACH ITEM IN ARRAY
  // EVERY TIME IT CALLS THE INNER-FUNCTION, IT PASSES THE CURRENT ITEM (a) AND ALSO PROVIDES THE 
  // NEXT ITEM IN THE ARRAY (b), FOR YOU TO COMPARE THE TWO. YOU THEN RETURN EITHER A -1, 0, OR 1.
  // -1 MEANS a < b, 0 MEANS a == b, AND 1 MEANS a > b.
  // FOR THIS SORT ALGORITHM, WE ARE GOING TO BE SORTING ON PRICE.
  if (a.price < b.price) return -1;
  else if (a.price == b.price) return 0;
  return 1;
});
console.log("\r\nSorted Complex Array:"); 
console.dir(sortedComplexFruitArray);