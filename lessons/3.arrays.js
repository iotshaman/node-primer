//--------------------------------------------------------------------------------------
// SECTION: CHEAT-SHEET PART 3 - ARRAYS
//--------------------------------------------------------------------------------------

exports.Run = function() {
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
}