//--------------------------------------------------------------------------------------
// LESSON #4 - COMPLEX ARRAYS (ARRAYS OF OBJECTS)
//--------------------------------------------------------------------------------------
let writeLessonHeader = require('./_lesson-header');

exports.Run = function() {
  // WRITE THE LESSON HEADER
  writeLessonHeader("LESSON #4 - COMPLEX ARRAYS (ARRAYS OF OBJECTS)");
  
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
  console.log("Price of cherries: " + cherryData.price);
  
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
  console.log("\r\n" + "Sorted Complex Array:"); 
  console.dir(sortedComplexFruitArray);
}