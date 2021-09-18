// THIS FILE ACCEPTS A COMMAND LINE ARGUMENT, REPRESENTING THE LESSON NUMBER
// THIS ARUMENT WILL THEN BE USED TO LOAD THE REQUESTED LESSON

var lessons = [
  { id: 1, file: require("./lessons/1.importing") },
  { id: 2, file: require("./lessons/2.truthiness-and-falsiness") },
  { id: 3, file: require("./lessons/3.arrays") },
  { id: 4, file: require("./lessons/4.complex-arrays") },
  { id: 5, file: require("./lessons/5.string-interpolation") }
];

// THE BELOW EXPRESSION USES THE GLOBAL "process" VARIABLE TO GET ALL ARGUMENTS
// IT THEN "SLICES" THE ARRAY AT INDEX 2, MEANING ONLY ITEMS WITH AN INDEX > 2
// WILL BE RETURNED. THIS IS BECAUSE THE FIRST 3 (0, 1, 2) INDEX VALUES ARE 
// FOR NODE JS INTERNALS, DEVELOPERS CAN IGNORE THEM (USUALLY).
var args = process.argv.slice(2);

if (!args.length) {
  // IF THE ARGS LENGTH IS 'FALSY', THEN NO LESSON NUMBER WAS PROVIDED
  // WHEN THIS HAPPENS, WE ALERT THE USER, THEN RETURN A NON-ZERO EXIT CODE
  console.log("No lesson number was provided.")
  return process.exit(1);
}

let lessonId = args[0];
let lesson = lessons.find(function(l) {
  return l.id == lessonId;
});

if (!lesson) {
  // IF WE CANT FIND THE LESSON, THEN THE USER PROVIDED AN INVALID LESSON ID
  // WHEN THIS HAPPENS, WE ALERT THE USER, THEN RETURN A NON-ZERO EXIT CODE
  console.log("Invalid lesson number provided.")
  return process.exit(1);
}

lesson.file.Run();