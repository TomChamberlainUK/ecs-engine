/**
 * Class representing a 2D vector.
 */
export class Vector2 {
  x: number;
  y: number;

  /**
   * Creates a new 2D vector.
   * @param props Properties passed to the vector.
   * @param props.x The endpoint distance from origin along the x axis.
   * @param props.y The endpoint distance from origin along the y axis.
   */
  constructor({
    x = 0,
    y = 0
  } : {
    x: number,
    y: number
  }) {
    this.x = x;
    this.y = y;
  }

  /** 
   * Adds this and another vector together.
   * _(Please note that this does not alter this vector or the one passed as an argument)_.
   * @param vector A vector to add to this one.
   * @returns A new vector.
   */
  add(vector: Vector2) {
    return new Vector2({
      x: this.x + vector.x,
      y: this.y + vector.y
    });
  }

  /** 
   * Subtracts a vector from this one. (Immutable).
   * _(Please note that this does not alter this vector or the one passed as an argument)_.
   * @param vector A vector to subtract from this one.
   * @returns A new vector.
   */
  subtract(vector: Vector2) {
    return new Vector2({
      x: this.x - vector.x,
      y: this.y - vector.y
    });
  }

  /**
   * Multiply both the x and y values of this vector by an amount.
   * _(Please note that this does not alter this vector)_.
   * @param multiplier An amount to multiply each value of this vector by.
   * @returns A new vector.
   */
  multiplyBy(multiplier: number) {
    return new Vector2({
      x: this.x * multiplier,
      y: this.y * multiplier
    });
  }

  /**
   * Divide both the x and y values of this vector by an amount.
   * _(Please note that this does not alter this vector)_.
   * @param divider An amount to divide each value of this vector by.
   * @returns A new vector.
   */
  divideBy(divider: number) {
    return new Vector2({
      x: this.x / divider,
      y: this.y / divider
    });
  }

  /** 
   * Get a vector that is perpendicular to this one.
   * _(Please note that this does not alter this vector)_.
   * @returns A new vector.
   */
  getNormal() {
    return new Vector2({ x: -this.y, y: this.x });
  }

  /**
   * Get a unit vector that indicates this vector's direction.
   * _(Please note that this does not alter this vector)_.
   * __This function uses the {@link getLength} method which performs a square root function which can be considered computationally expensive and so should be used sparingly__.
   * @returns A new vector.
   */
  getUnit() {
    const length = this.getLength();
    if (length === 0) return new Vector2({ x: 0, y: 0 }) // prevent division by zero
    else return this.divideBy(length);
  }

  /**
   * Get a unit vector that indicates this vector's perpendicular direction.
   * _(Please note that this does not alter this vector)_.
   * __This function uses the {@link getLength} method which performs a square root function which can be considered computationally expensive and so should be used sparingly__.
   * @returns A new vector.
   */
  getUnitNormal() {
    return this.getNormal().getUnit();
  }

  /**
   * Get the length of this vector.
   * __This function performs a square root function which can be considered computationally expensive and so should be used sparingly__.
   * @returns The length of this vector.
   */
  getLength() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  /**
   * Get the length of this vector, squared.
   * This can be useful when calculating distance between vectors when the precise length is not needed as this avoids a square root function.
   * @returns The length of this vector, squared.
   */
  getLengthSquared() { // save performance when measuring if a^2 + b^2 === c^2
    return this.x * this.x + this.y * this.y;
  }

  /**
   * Get the dot product of two vectors.
   * This represents how much one vector is in the direction of another.
   * The returned number can be positive or negative.
   * Positive output indicates an acute angle, negative output indicates an obtuse angle, 0 output indicates an orthagonal angle.
   * @param vectorA The first vector to compare.
   * @param vectorB The second vector to compare.
   * @returns A positive or negative number or 0. Two unit vectors would return a number between -1 and 1.
   */
  static dot(vectorA: Vector2, vectorB: Vector2) {
    return vectorA.x * vectorB.x + vectorA.y * vectorB.y;
  }

  /**
   * Get the cross product of two vectors.
   * (This is performed by assuming a 3rd dimension of each vector where z === 0, as cross product is technically not possible on 2D vectors).
   * The returned number can be positive or negative.
   * Positive output indicates vectorB is angularly clockwise from vectorA, whereas negative output indicates vectorB is angularly counter-clockwise from vectorA.
   * @param vectorA The first vector to compare.
   * @param vectorB The second vector to compare.
   * @returns A positive or negative number or 0. (The absolute of this number is the _sine_ of the angle between the two vectors).
   */
  static cross(vectorA: Vector2, vectorB: Vector2) {
    return vectorA.x * vectorB.y - vectorA.y * vectorB.x
  }
}