/**
 * MathUtils.ts
 *
 * This file contains the MathUtils class, which provides utility methods for mathematical operations.
 */

/**
 * MathUtils
 *
 * Utility class for mathematical operations.
 */
export class MathUtils {
  /**
   * Checks if two numbers have any common factors.
   * @param a The first number.
   * @param b The second number.
   * @returns True if the numbers have common factors, false otherwise.
   */
  static hasCommonFactors(a: number, b: number): boolean {
    if (a <= 0 || b <= 0) return false;

    // Find greatest common divisor (GCD)
    const gcd = this.findGCD(a, b);

    // If GCD is greater than 1, they share a common factor
    return gcd > 1;
  }

  /**
   * Finds the greatest common divisor (GCD) of two numbers using the Euclidean algorithm.
   * @param a The first number.
   * @param b The second number.
   * @returns The greatest common divisor of the two numbers.
   */
  static findGCD(a: number, b: number): number {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
}
