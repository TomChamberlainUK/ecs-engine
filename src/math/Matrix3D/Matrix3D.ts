import { Vector2 } from 'math/Vector2/Vector2';

/**
 * Class representing a 2D matrix.
 * This is a 3x2 matrix optimised for 2D calculations.
 */
export class Matrix3D {
  data: Float64Array;

  /**
   * Creates a new 2D matrix.
   * @param data The values of the matrix in row-major order.
   */
  constructor(data = [
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
  ]) {
    this.data = new Float64Array(data);
  }

  // /** 
  //  * Multiply a vector by this matrix.
  //  * _(Please note that this does not alter the vector or this matrix)_.
  //  * @param vector The vector to multiply.
  //  * @returns A new vector.
  //  */
  // multiplyVector(vector: Vector2) {
  //   return multiplyVector2ByMatrix2D(vector, this);
  // }

  // /**
  //  * Multiply a matrix by this matrix.
  //  * _(Please note that this does not alter either matrix)_.
  //  * @param matrix The matrix to multiply.
  //  * @returns A new matrix.
  //  */
  // multiplyMatrix(matrix: Matrix2D) {
  //   return multiplyMatrices2D(matrix, this);
  // }

  // /**
  //  * Multiply this matrix by a scale matrix.
  //  * _(Please note that this does not alter this matrix)_.
  //  * @param x The scale factor on the x axis.
  //  * @param y The scale factor on the y axis.
  //  * @returns A new matrix.
  //  */
  // scale(x: number, y: number): Matrix2D {
  //   return multiplyMatrices2D(new ScaleMatrix2D({ x, y }), this);
  // }

  // /** 
  //  * Multiply this matrix by a scale matrix.
  //  * _(Please note that this does not alter this matrix)_.
  //  * @param radian The rotation amount in radians.
  //  * @returns A new matrix.
  //  */
  // rotate(radian: number): Matrix2D {
  //   return multiplyMatrices2D(new RotationMatrix2D(radian), this);
  // }

  // /** 
  //  * Multiply this matrix by a translation matrix.
  //  * _(Please note that this does not alter this matrix)_.
  //  * @param x The translation amount on the x axis.
  //  * @param y The translation amount on the y axis.
  //  * @returns A new matrix.
  //  */
  // translate(x: number, y: number): Matrix2D {
  //   return multiplyMatrices2D(new TranslationMatrix2D({ x, y }), this);
  // }
}

// /**
//  * Class representing a 2D identity matrix.
//  */
// export class IDMatrix2D extends Matrix2D {
//   /**
//    * Creates a new 2D identity matrix.
//    */
//   constructor() {
//     super();
//   }
// }

// /**
//  * Class representing a 2D scale matrix.
//  */
// export class ScaleMatrix2D extends Matrix2D {
//   /**
//    * Creates a new 2D scale matrix.
//    * @param props
//    * @param props.x The scaling factor along the x axis.
//    * @param props.y The scaling factor along the y axis.
//    */
//   constructor({
//     x = 1,
//     y = 1
//   } : {
//     x: number,
//     y: number
//   }) {
//     super([
//       x, 0,
//       0, y,
//       0, 0
//     ]);
//   }
// }

// /**
//  * Class representing a 2D translation matrix.
//  */
// export class TranslationMatrix2D extends Matrix2D {
//   /**
//    * Creates a new 2D translation matrix.
//    * @param props
//    * @param props.x The translation amount on the x axis.
//    * @param props.y The translation amount on the y axis.
//    */
//   constructor({
//     x = 0,
//     y = 0
//   } : {
//     x: number,
//     y: number
//   }) {
//     super([
//       1, 0,
//       0, 1,
//       x, y
//     ]);
//   }
// }

// /**
//  * Class representing a 2D rotation matrix.
//  */
// export class RotationMatrix2D extends Matrix2D {
//   /**
//    * Creates a new 2D rotation matrix.
//    * @param angle The rotation amount in radians.
//    */
//   constructor(angle: number = 0) {
//     super([
//       Math.cos(angle),  Math.sin(angle),
//       -Math.sin(angle), Math.cos(angle),
//       0,                0
//     ]);
//   }
// }

// /**
//  * Multiply two 2D matrices together.
//  * _(Please note that this does not alter either matrix)_.
//  * @param matrixA The first matrix factor.
//  * @param matrixB The second matrix factor.
//  * @returns A new matrix.
//  */
// function multiplyMatrices2D(matrixA: Matrix2D, matrixB: Matrix2D) {

//   // Cache relevant values
//   const a0 = matrixA.data[0],
//     a1 = matrixA.data[1],
//     a2 = matrixA.data[2],
//     a3 = matrixA.data[3],
//     a4 = matrixA.data[4],
//     a5 = matrixA.data[5],
//     b0 = matrixB.data[0],
//     b1 = matrixB.data[1],
//     b2 = matrixB.data[2],
//     b3 = matrixB.data[3],
//     b4 = matrixB.data[4],
//     b5 = matrixB.data[5];
    
//   const matrix = new Matrix2D([
//     // column 0
//     (a0 * b0) + (a2 * b1),
//     (a1 * b0) + (a3 * b1),
//     // column 1
//     (a0 * b2) + (a2 * b3),
//     (a1 * b2) + (a3 * b3),
//     // column 2
//     (a0 * b4) + (a2 * b5) + a4,
//     (a1 * b4) + (a3 * b5) + a5
//   ]);

//   return matrix;

// }

// /**
//  * Multiply a 2D vector by a 2D matrix.
//  * _(Please note that this does not alter the vector or this matrix)_.
//  * @param vector The multiplicand vector.
//  * @param matrix The multiplier matrix.
//  * @returns A new vector.
//  */
// function multiplyVector2ByMatrix2D(vector: Vector2, matrix: Matrix2D) {

//   return new Vector2({
//     x: (vector.x * matrix.data[0]) + (vector.y * matrix.data[2]) + matrix.data[4], 
//     y: (vector.x * matrix.data[1]) + (vector.y * matrix.data[3]) + matrix.data[5] 
//   });

// }