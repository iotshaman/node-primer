//--------------------------------------------------------------------------------------
// LESSON #1 - IMPORTING FUNCTIONS / VARIABLES FROM OTHER FILES
//--------------------------------------------------------------------------------------

exports.Run = function() {
  // IN THE BELOW "REQUIRE" FUNCTION CALL, WE PROVIDE THE PATH TO THE FILE WE ARE IMPORTING
  // NOTICE THE "../" AT THE START, THAT MEANS GO 1 FOLDER DOWN.
  var numberService = require("../services/number.service");

  // NOW THAT WE HAVE IMPORTED THE FILE, WE CAN ACCESS ITS EXPORTED FUNCTIONS / VARIABLES
  const generateRandomInteger = numberService.GenerateRandomInteger;
  const maxSafeInteger = numberService.MaxSafeInteger;

  // AND TO PROVE IT WORKS, LETS USE THE IMPORTED FUNCTION / VARIABLE
  console.log("Random number generated: " + generateRandomInteger());
  console.log("Max safe integer: " + maxSafeInteger + "\r\n");
}