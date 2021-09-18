// THIS FILE IS JUST AN ENTRY POINT FOR RUNNING ALL OF THE LESSONS
// IF YOU JUST WANT TO RUN 1 LESSON, USE "npm run lesson [lesson number]"
var lessons = [
  require("./lessons/1.importing"),
  require("./lessons/2.truthiness-and-falsiness"),
  require("./lessons/3.arrays"),
  require("./lessons/4.complex-arrays"),
  require("./lessons/5.string-interpolation")
];

for (var i = 0; i < lessons.length; i++) {
  // CALL THE EXPORTED "Run" FUNCTION ON THE LESSON AT INDEX "i"
  lessons[i].Run();
  // ADD AN EMPTY STRING TO SEPARATE CONSOLE OUTPUT
  console.log('');
}