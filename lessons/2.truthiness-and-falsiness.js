//--------------------------------------------------------------------------------------
// LESSON #2 - TRUTHINESS / FALSINESS
//--------------------------------------------------------------------------------------

exports.Run = function() {
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
}