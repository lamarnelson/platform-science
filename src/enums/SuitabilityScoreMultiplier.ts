/**
 * SuitabilityScoreMultiplier.ts
 *
 * This file contains the SuitabilityScoreMultiplier enum, which defines different multipliers for suitability scores.
 * It provides multipliers for shipments with even and odd street names, as well as a common factor multiplier.
 */

/**
 * SuitabilityScoreMultiplier
 *
 * Enum representing different multipliers for suitability scores.
 */
export enum SuitabilityScoreMultiplier {
  /**
   * Multiplier for shipments with even street names.
   */
  ShipmentStreetNameEven = 1.5,

  /**
   * Multiplier for shipments with odd street names.
   */
  ShipmentStreetNameOdd = 1,

  /**
   * Multiplier for shipments where the driver's name length and street name length have common factors.
   */
  ShipmentStreetNameDriverNameCommonFactor = 1.5,
}
