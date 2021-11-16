// Due to the local geology, trees in this area only grow on exact integer coordinates in a grid. You make a map (your puzzle input) of the open squares (.) and trees (#) you can see.
// These aren't the only trees, though; due to something you read about once involving arboreal genetics and biome stability, the same pattern repeats to the right many times
// You start on the open square (.) in the top-left corner and need to reach the bottom (below the bottom-most row on your map).
// The toboggan can only follow a few specific slopes (you opted for a cheaper model that prefers rational numbers); start by counting all the trees you would encounter for the slope right 3, down 1:

// From your starting position at the top-left, check the position that is right 3 and down 1. Then, check the position that is right 3 and down 1 from there, and so on until you go past the bottom of the map.

// The locations you'd check in the above example are marked here with O where there was an open square and X where there was a tree:

// Starting at the top-left corner of your map and following a slope of right 3 and down 1, how many trees would you encounter?

let input = `.##.#.........#.....#....#...#.
.#.#.#...#.......#.............
......#..#....#.#...###.......#
.......###......#.....#..##..#.
..#...##.......#.......###.....
....###.#....###......#....#..#
......#..#....#...##...........
..#..#....#...#.....####.......
...#........#.#.......#..#...#.
......#...#........#...#..##...
#..#........#............#...##
..#..#.#....#...........#...###
#.#..#...........#.##.#.#....#.
.#.#....#...##.....#...........
.....##....#...#..............#
...#....#...#.#.#.#...#........
#....#....#.#.#..#....#..#..#..
.................#..#.....#....
#..###...#.#..#.#......#.......
...#..........#......#....#....
.#.#.........##..#.......#...#.
.#..........#...#..#...........
....##.#.......................
.......#...........#...#.......
...#...#..##...#....###..#....#
....#.#.....##...##.#.#........
...........#.#..#.#......#..#..
.....#.....#....#...#........#.
..#......#..#.........#.....#..
.........................#...#.
#...#...#....#........##....#..
#..#.#.............#..........#
.#.........#.....#..#.#.#..#.#.
#...#..#.......####.#....##....
##...##..#.#.#...#.#.....#..#.#
.#..#....#.##........#...#....#
#...#..##.#....##..#..#.#......
.#........#.....#.#....##.##.#.
...#...#........#..#.##.##.....
....................#.#.#.#...#
..####.#..##...#....#.....##...
#......#.....#.#......#.#..#.##
..#.....#..#...........##.#....
#....#........#............#...
..##....#..............#......#
..#......#.#.......####......#.
..............##....#....##.#..
.#...............#....#....#.#.
..#.#.#..#.......##.#..........
.#...#.......#.#....#.##.......
.....#.##...#...........#.#....
..#.#..#...#..##...#.#.......##
.#.....#....#.#......#.#.......
....##.........#.#.............
.......##.......#..............
..........#......#......#....##
..##.....#..#.#..........#.....
...#....#.......#....##........
.......#...........#...........
...#.#......#.#........#....#..
.....#...........#.#.#...#.#..#
.#.#...#.#.#..........#.....###
#........#...#.................
...##.....#.....#..#..#.......#
......##...........#..#....##..
.........#............##...#...
.....#.....##...##.............
.#....#..#.#.#.#...#..#..#.....
.....#..#.#..#....#..#.........
....#.....#......#...#.........
#..#..#.................#......
.###.....#...#.#........##.#...
..#...#....#.##..#.....#.#....#
..#...##.................#.#...
....##..........#..#..#..#....#
....#..##....##.....#.#....#...
.#.#.#.....##........#.##..##.#
....#..#......#..#........#....
.......#.....###.#....#.......#
#....#.......#......##.#.......
.##.#.........#.#..##..#....##.
......#........#.#....#...#....
.####.....#.........#.#......##
##....#......#....#..#.#....##.
...........###.#.....#..#......
.......#...........#...........
........###....#..#.#..........
....#........#......#..........
.........#......#..............
...#...............#......#...#
....#..##...#.........#...#....
##........#.#....#......###....
....#.......................#..
#................#.#..#......##
...#.#.....#...#...........#.##
.#....#.##......#...##.#....#..
#...#....#..............#..#..#
.......#....#.##............#.#
.....#.#.......#.#...#.........
...#.....#..##...##...#........
..#.......#..####..#..#...#....
#.#................##...##.#..#
.....#.....##.#.....#......#..#
....#.#...#.........#.........#
..#......#............#.....#..
.....#..........#.#..#..##...##
........#................#.#...
#...#.#....##...###...#.#......
.............##.#..##..........
#..#......#...........#......#.
#.#....#..........#.##....###..
.............#.........#....#..
#........#..#.#..#...#....#....
..............#..............##
.....#...#..............#.##...
#...##..#...........#..........
..#....#...#.#........#..#.#..#
..##......#...............#....
....#...#..###..#......###.#...
.......##..#.#........#....#...
..##...#.......#...#...........
.#.......#.....#.#...##..#....#
.............#.......#.#.#....#
#.......#..#..#...#.#......##..
#.##..#..#..#....##.#...###.#.#
...##...#..#..#........#.#..#..
#....##........................
##...#...#......#.#.....#..#...
......#............#....#......
#......#.......#.......##.#....
..................#..#..#.#....
..#..................##.#......
..##........#.#.....##..#..#.#.
#....#..............#....####..
#..#..........................#
..#.#.#.#....#.......#....#.#..
.....#.#........#..........#.#.
........#.....#.......#........
#.....#....#.###.....#.......#.
.....##.#...#.#..#...#.#.#.....
......##...#.#...##..........#.
.#............#.....#..#....#..
.#................#.#..#.......
....................##...##....
#.......##...#.....#..#........
.##....#.#.#.#...........#...#.
..#.#..#.#.........#...........
...#......#.....#...##.........
..........#.#.....###.#........
.............#.....##..........
.........#...####........#.####
...................#....#......
.....#.........#.#....#..#...#.
.##...#.......##.#...#.#.#..#..
.....##........#....#...#.##.#.
#...#...#.#....#..............#
#..#.##.............#..........
..#...#..#.#.##..............##
#......#.#...##..........#.##..
.##.#...#...#.........#.#......
......#........##.#..#.........
#..#.......#......#.#..#.#.....
.#..#...........#.#.##.....#...
.....................#..#.#....
........#...##......#.....##...
#.............#...##....##....#
#.#...........#....##.#......##
.....#.....#.#..........###..#.
....#...#....##....#..##.......
.#....#....#.......#.#.....#...
.#...#.......##...##........#..
......##.......#.##.#.###......
....##.......#......#..........
...................#..##.......
......................#...##...
...##....#.#..#..#.............
.#......##..........#...#......
....##..#....#..#...#...####.#.
...#.......#.......#........#.#
#.........#..#...#...##...#.#.#
....#...#.......#...#....#.....
...#.....#.##..##.#.......##.##
.......#....#........#.........
.....#...#....#..#....#....#...
.##....#...#........#...#.#...#
.......##............#..#...#..
#.#...#....#......#.#..........
.#.##...........#........#.....
.#....#.............#.#.##.....
#.......###..#...###.........#.
#..#.#.......#.........#...#..#
..........#......#........#...#
.#.#...#.##.......##...........
.....#.........#.....#.........
.........#.........#....##.#..#
.#.......##..##..#.....#...#...
.#.....##...#..#..............#
..##...#..#..#.#...#..........#
.#.......####......#......####.
##..##........#.....#........#.
..##.#..#.#....................
...........#..#...##....##.....
..#.#........#.........#....##.
..#...#..##..###.#..###........
......#..#.............#..##...
.##.........#.#..#...#.##.###..
.#...............#...........#.
.#....#........#....#........##
..#####.#.#..#.#........##...#.
###....#....#...#..............
.....#...##............#...#...
##...........##.#.##.....#.....
..............#..#.....#...#...
...................#...........
#..........##.........#........
...#.........#..#.....#..#..#..
....###.#......#......##....#..
#......#..........#...#........
...#.#...#..#..........##......
.....##.....#.#............##..
..#..#.###....#.#.#...##....#..
...#........#....##.......#....
.#.............#..##.......#...
..#.#..###..#.....#...##.......
.........#......##...#.#..#....
.............#....##....#.#....
#..#...#....#.#...#......##....
.............#.#......#.....###
#.##....#........#.............
.....#...#.####...#.....#......
....#....###....##.......#.....
..#....##..#....#.#.......#....
...#.....#....#.........#......
.#......#.#....#.#........#....
.......#......#.....#.#..#.....
#......#.........##.##.#...#...
..#.###...................#....
....#..#....##.#........#....#.
...........#..........#......#.
.#..#.#...###..........#..#...#
...#...##..#....#...#..........
.#........#.................##.
....#.......##....#...#........
#.#...##.##...#.#.......#...#..
.....#.#.##.#......#..#..##....
.....##...#.#.....#...#........
#.#.......#..#..........##.....
................#......#..#.#.#
#......#...#...................
...#.....##.#.........#.#..#..#
...#..##..##.......#....#......
....##...#....#..#...........#.
..#..#......#...#..#...........
...#.##....#...##.......#......
.......#....#..#..##..#..#....#
.#.................#.#...#.##..
.....#..................#..#.#.
...#......##...#...........#...
..#.........#....#..#...#.....#
..#...#.....#.........##.#.....
.....#.#....##...............#.
....#...#............#.........
.....#.....###............#....
..#.#.#.......#....#...........
...........##...##...#.......#.
.........###.#......#..........
.#.......#....#.....#.##..#...#
..#..................#..###....
..#....#...#......##.........#.
........#..#........#.........#
.#..#......#.........#.........
...#..##.....#....#....#.....#.
......#.#............###.....##
.......#........#.......#.#....
..#.............#..............
.............##..#.#.#....#....
.................#....#.#......
##..#.#.......#....#.....#.....
.##............##.#.......#.#..
#..#...........##......#.......
.##......#####..##.#....#.#....
.......##.....#...#........#...
.#.#.....##....#..#....#..#...#
............##.#.....##.#......
........##...###.#......#......
......#..#.#...#..#............
.........#...........#......#..
.#.........#............##.....
.#..#..#...#.#.............#...
......#.#..##...#.#...........#
#.##.......#...#.........#.....
.....#..#............#....##...
.#......#........#.............
..#...#....#..#.......###......
....#.......###.#.#...........#
.............#...##............
.##.#.#.#...........#...#....#.
............##.........#......#
...............#......#...#....
...#.....#..###..#...........#.
.#........#.....##........#.#..
....#.#.......#..#..#...##.#.#.
.......##...........#...#......
....#.#..##......#.......#.....
..#........#.#......#.#........
........#....#..#....#..##.....
.#.........##..........#.#.....
..##...##.....##......##..#....
.###.....##...........##.#...##
...#................#.......#..
#.......#.#.#..#.#.##..#...#...
.#.#.......#..#................
..#.#.#......#............#....
#.....#.###..#.#...#...........
#...........#..........#.#.#.##
..#.#...#......##.....#........
........#.......#.#...#...#....
..#..........#......###......#.
..........##.#....#.....#.##...
..#.....#......#.........#..##.
.#...#........#..#.#..#...##..#
..###........#......#.#........
..#.##.#....#.#....#.#...#.....`

let numTrees = 0;
let rows = input.split("\n"); // 323 rows
let rowLength = rows[0].length; // 31

// count trees checks whether the current target is a #, then adds one to the row number, and 3 to the countPosition on each iteration
function countTrees() {
  let countPosition = 0;
  let row = 0;

  for (let i = 0; i < rows.length; i++) {
    if (rows[row][countPosition] === "#") numTrees++;
    row++;
    if (countPosition + 3 < rowLength) {
      countPosition += 3;
    } else {
      // if countPosition is greater than the length of the row, minus the length of the row and add 3 (so 28 becomes 0, 29 becomes 1, etc)
      countPosition = countPosition - rowLength + 3;
    }
  }
}
countTrees();

console.log(numTrees);  // 284


// --- Part Two ---
// Time to check the rest of the slopes - you need to minimize the probability of a sudden arboreal stop, after all.
// Determine the number of trees you would encounter if, for each of the following slopes, you start at the top-left corner and traverse the map all the way to the bottom:

//     Right 1, down 1.
//     Right 3, down 1. (This is the slope you already checked.)
//     Right 5, down 1.
//     Right 7, down 1.
//     Right 1, down 2.

// What do you get if you multiply together the number of trees encountered on each of the listed slopes?

let totalTrees = 1;
// The slopes represent Right 1, down 1, Right 3, down 1, etc
let slopes = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]];

slopes.forEach(slope => {
  // reset numTrees for each slope as totalTrees is multiplied by numTrees at the end of each countTrees iteration
  numTrees = 0;
  countTreesPart2(slope[0], slope[1]);
});

// count trees checks whether the current target is a #, then adds y to the row number, and x to the countPosition on each iteration
function countTreesPart2(x, y) {
  let countPosition = 0;
  let row = 0;

  for (let i = 0; i <= rows.length; i++) {
    // if row is greater than the number of rows, the toboggan has gone off the bottom
    if (row > rows.length) {
      totalTrees *= numTrees;
      return;
    }
    if (i !== 0) {
      if (rows[row][countPosition] === "#") {
        numTrees++;
      }
      row += y;
      if (countPosition + x < rowLength) {
        countPosition += x;
      } else {
        // if countPosition is greater than the length of the row, minus the length of the row and add a
        countPosition = countPosition - rowLength + x;
      }
    }
    if (i === rows.length) totalTrees *= numTrees;
  }
}
console.log(totalTrees);  // 3510149120
