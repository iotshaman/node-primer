function generateRandomInteger() {
  // THE VALUE IN 'randomNumber' WILL BE BETWEEN 0 AND 1.
  let randomNumber = Math.random();
  // NOW WE MULTIPLY THE RANDOM NUMBER TO GET A NUMBER BETWEEN 1 AND 100.
  randomNumber = randomNumber * 100;
  // NEXT WE WANT TO "FLOOR" THE NUMBER, ESSENTIALLY ROUNDING DOWN.
  randomNumber = Math.floor(randomNumber);
  // FINALLY, WE RETURN THE RANDOM NUMBER
  return randomNumber;
}

// TO MAKE THIS FUNCTION AVAILABLE IN OTHER FILES, YOU MUST EXPORT IT.
// TO EXPORT, SIMPLY ASSIGN THE FUNCTION 'generateRandomInteger' TO A NEW  
// VARIABLE IN THE GLOBAL PROPERTY 'exports'.
// PS: EXPORTED FUNCTIONS / VARIABLES USUALLY USE "UPPER-CAMEL CASE"
exports.GenerateRandomInteger = generateRandomInteger;
exports.MaxSafeInteger = Number.MAX_SAFE_INTEGER;

// PS: THE ABOVE FUNCTION IS WRITTEN TO MAKE IT EASIER TO NEW DEVELOPERS.
// HOWEVER, THERE IS A MUCH MORE ELEGANT AND SIMPLE WAY TO WRITE IT.
// BELOW IS AN EXAMPLE OF A MORE ELEGANT WAY TO WRITE THIS FUNCTION.
function generateRandomIntegerElegant() { return Math.floor(Math.random() * 100); }

exports.GenerateRandomIntegerElegant = generateRandomIntegerElegant;