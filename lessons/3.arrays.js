//--------------------------------------------------------------------------------------
// LESSON #3 - ARRAYS
//--------------------------------------------------------------------------------------
let writeLessonHeader = require('./_lesson-header');

exports.Run = function() {
  // WRITE THE LESSON HEADER
  writeLessonHeader("LESSON #3 - ARRAYS");
  
  // ARRAY MANIPULATION IS ONE OF THE MOST IMPORTANT PARTS OF PROGRAMMING; 
  // IT IS VERY COMMON TO DEAL WITH "LISTS" OF THINGS (USERS, PRODUCTS, ETC.).
  // JUNIOR PROGRAMMERS USUALLY DONT PRACTICE ARRAY MANIPULATION MUCH, AND THAT 
  // IS A MISTAKE; LEARNING ARRAY MANIPULATION EARLY IN YOUR JOURNEY WILL 
  // MAKE YOU A BETTER PROGRAMMER.

  // ARRAYS ARE DEFINED USING THE [] SYMBOLS (BRACKETS), AND CAN STORE ANY DATA TYPE
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
  console.log("Updated fruit array:");
  console.dir(updatedFruitArray);

  let filteredFruitArray = fruitArray.filter(function(fruit) {
    // FILTER TAKES A FUNCTION AS AN ARGUMENT, THEN CALLS THE FUNCTION ONCE FOR EACH ITEM IN ARRAY
    // YOU THEN RETURN A BOOLEAN VALUE, INDICATING IF THE ELEMENT SHOULD BE INCLUDED IN THE RESUL SET
    return fruit != 'Apples';
  });
  console.log("\r\n" + "Filtered fruit array:");
  console.dir(filteredFruitArray);

  let cherryIndex = fruitArray.findIndex(function(fruit) {
    // FIND INDEX TAKES A FUNCTION AS AN ARGUMENT, THEN CALLS THE FUNCTION ONCE FOR EACH ITEM IN ARRAY
    // YOU THEN RETURN A BOOLEAN VALUE, IF THE CURRENT ITEM UNDER REVIEW IS THE ONE YOU ARE LOOKING FOR
    // NOTE: ARRAYS IN JAVASCRIPT ALWAYS START WITH INDEX '0' (CALLED ZERO-BASE INDEXING)
    return fruit == 'Cherries';
  });
  console.log("\r\n" + "Array index ('Cherries'): " + cherryIndex);

  // SORTING A SIMPLE ARRAY IS EASY. IF YOUR ARRAY ONLY HAS PRIMITIVES (STRING, NUMBER, DATE, ETC),
  // THEN THE BUILT-IN ARRAY SORT FUNCTION DOES NOT REQUIRE ANY PARAMETERS.
  var sortedFruitArray = fruitArray.sort();
  console.log("\r\n" + "Sorted Array:"); 
  console.dir(sortedFruitArray);
}