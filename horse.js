const gameHorse = require("./moveHorse.js");

gameHorse([0, 0],
     [1, 2]);
//Made MOves were:
// 0, 0
// 1, 2

gameHorse([3, 3],
     [7, 6]);
// Shortest way is 3 moves!
//Made MOves were: 
// 3, 3
// 4, 5
// 5, 7
// 7, 6

gameHorse([0, 0],
     [7, 7]);
// Shortest way is 6 moves!
// Made MOves were:
// 0, 0
// 1, 2
// 2, 4
// 3, 6
// 4, 4
// 5, 6
// 7, 7
