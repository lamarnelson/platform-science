/**
 * StringUtils.ts
 *
 * This file contains utility functions related to string manipulation.
 */

/**
 * StringUtils
 *
 * Utility class for string operations.
 */
export class StringUtils {
  /**
   * Counts the number of vowels in a string.
   * @param str The input string.
   * @returns The number of vowels in the string.
   */
  static countVowels(str: string): number {
    const vowels = str.match(/[aeiou]/gi);
    return vowels ? vowels.length : 0;
  }

  /**
   * Counts the number of consonants in a string.
   * @param str The input string.
   * @returns The number of consonants in the string.
   */
  static countConsonants(str: string): number {
    const consonants = str.match(/[bcdfghjklmnpqrstvwxyz]/gi);
    return consonants ? consonants.length : 0;
  }

  /**
   * Checks if the length of a string is even.
   * @param str The input string.
   * @returns True if the length of the string is even, otherwise false.
   */
  static isStringLengthEven(str: string): boolean {
    return str.length % 2 === 0;
  }

  /**
   * Extracts the street name from a full street address.
   * @param streetAddress The full street address.
   * @returns The street name extracted from the address.
   */
  static getStreetName(streetAddress: string): string {
    return streetAddress.split(',')[0].trim();
  }
}
