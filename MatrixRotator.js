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

  rotate(direction) {
    let rotatedMatrix = [];

    for (let i = 0; i < this.matrix.length; i++) {
      let row = [];
      for (let j = 0; j < this.matrix[i].length; j++) {
        if (direction === Direction.CW) {
          row.push(this.matrix[this.matrix.length - 1 - j][i]);
        }
        if (direction === Direction.CCW) {
          row.push(this.matrix[j][this.matrix.length - 1 - i]);
        }
      }
      rotatedMatrix.push(row);
    }
    this.matrix = rotatedMatrix;
  }
};
