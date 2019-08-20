const Direction = require("./Direction").Direction;

/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
module.exports = class MatrixRotator {
  constructor(matrix) {
    this.matrix = matrix;
  }

  //      |-- Must be Direction.CW
  //      v        or Direction.CCW
  rotate(direction) {
    // do work here
    // must be a valid Direction, see Direction.js

    /*
    rotated clockwise:
    [
      [9,0,3,4,8],
      [0,6,3,5,0],
      [3,8,6,2,1],
      [8,8,9,9,9],
      [7,3,0,7,3]
    ]
    original:
    [
      [8,0,1,9,3],
      [4,5,2,9,7],
      [3,3,6,9,0],
      [0,6,8,8,3],
      [9,0,3,8,7]
    ];
    rotated counterclockwise:
    [
      [3,7,0,3,7],
      [9,9,9,8,8],
      [1,2,6,8,3],
      [0,5,3,6,0],
      [8,4,3,0,9]
    ]
    */

    let rotatedMatrix = [];

    // for (let i = 0; i < this.matrix.length; i++) {
    //   let row = [];
    //   for (let j = 0; j < this.matrix[0].length; j++) {
    //     if (direction === Direction.CW) {
    //       row.push(this.matrix[this.matrix.length - 1 - j][i]);
    //     } else if (direction === Direction.CCW) {
    //       row.push(this.matrix[j][this.matrix.length - 1 - i]);
    //     }
    //     rotatedMatrix.push(row);
    //   }
    // }
    // console.log(rotatedMatrix);
    // this.matrix = rotatedMatrix;

    if (direction === Direction.CW) {
      for (let i = 0; i < this.matrix.length; i++) {
        let row = [];
        for (let j = 0; j < this.matrix[0].length; j++) {
          row.push(this.matrix[this.matrix.length - 1 - j][i]);
        }
        rotatedMatrix.push(row);
      }
      // console.log(rotatedMatrix);
      this.matrix = rotatedMatrix;
    } else if (direction === Direction.CCW) {
      for (let i = 0; i < this.matrix.length; i++) {
        let row = [];
        for (let j = 0; j < this.matrix[0].length; j++) {
          row.push(this.matrix[j][this.matrix.length - 1 - i]);
        }
        rotatedMatrix.push(row);
      }
      // console.log(rotatedMatrix);
      this.matrix = rotatedMatrix;
    }
  }
};
