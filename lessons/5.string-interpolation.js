//--------------------------------------------------------------------------------------
// LESSON #5 - STRING INTERPOLATION
//--------------------------------------------------------------------------------------
let writeLessonHeader = require('./_lesson-header');

exports.Run = function() {
  // WRITE THE LESSON HEADER
  writeLessonHeader("LESSON #5 - STRING INTERPOLATION");
  
  // THE WORD INTERPOLATION SOUNDS COMPLICATION, HOWEVER IT IS REALLY EASY, AND POWERFUL.
  // THE WORD 'INTERPOLATE' SIMPLY MEANS TO "INERT SOMETHING INTO SOMETHING ELSE".
  // WHEN TALKING ABOUT STRING INTERPOLATION, WE ARE TALKING ABOUT INSERTING WORDS INTO 
  // ANOTHER SET OF WORDS.

  // IN THE ABOVE SECTIONS, WE ARE ACTUALLY DOING A FORM OF STRING INTERPOLATION.
  // HERE IS THE MOST OBVIOUS (BUT NOT PREFERRED) WAY OF DOING STRING INTERPOLATION:
  var name = "John Doe";
  var poorlyInterpolatedString = "Hello, my name is " + name + "!";
  console.log("Poorly interpolated string: " + poorlyInterpolatedString);

  // WE COULD DO THE SAME THING, BUT IN A MUCH SIMPLER, AND MORE ELEGANT WAY:
  var nicelyInterpolatedString = `Hello, my name is ${name}!`;
  console.log(`Nicely interpolated string: ${nicelyInterpolatedString}`);

  // NOTICE HOWE WE USED "BACKTICKS" (`), INSTEAD OF SINGLE OR DOUBLE QUOTES?
  // WHEN YOU USE BACKTICKS, YOU CAN USE THE "${}" SYNTAX TO INSERT VARIABLE
  // INTO YOUR STRING "TEMPLATE" (OFTEN CALLED "TEMPLATE LITERALS").

  // YOU MAY NOTICE THIS HAS THE SAME OUTPUT; WHILE THAT IS TRUE, THE "NICELY"
  // INTERPOLATED STRING IS MUCH EASIER TO READ, AND LESS LIKELY TO INCLUDE ERRORS.
}