/**
 * BaseSuitabilityCalculator.ts
 *
 * This file contains the BaseSuitabilityCalculator class, which calculates the suitability score for shipments based on drivers.
 * It provides methods to calculate the base score and apply common factor multipliers.
 */

import {type Driver} from '../models/Driver';
import {type Shipment} from '../models/Shipment';
import {SuitabilityScoreMultiplier} from '../enums/SuitabilityScoreMultiplier';
import {StringUtils} from '../utils/StringUtils';
import {MathUtils} from '../utils/MathUtils';

/**
 * BaseSuitabilityCalculator
 *
 * This class provides methods to calculate the suitability score for shipments based on drivers.
 * Future Enhancements: Multiple SuitabilityCalculators based on Geo Location, Time, Etc.
 */
export class BaseSuitabilityCalculator {
  /**
   * calculateSuitabilityScore
   *
   * Calculates the suitability score for a given driver and shipment.
   * @param shipment The shipment (street address) for which the suitability score is calculated.
   * @param driver The driver for whom the suitability score is calculated.
   * @returns The suitability score for the given driver and shipment pair.
   */
  static calculateSuitabilityScore(shipment: Shipment, driver: Driver): number {
    const baseScore = this.calculateBaseScore(shipment, driver);
    return this.applyCommonFactorMultiplier(shipment, driver, baseScore);
  }

  /**
   * calculateBaseScore
   *
   * Calculates the base score for a given driver and shipment.
   * @param shipment The shipment (street address) for which the base score is calculated.
   * @param driver The driver for whom the base score is calculated.
   * @returns The base score for the given driver and shipment.
   */
  private static calculateBaseScore(
    shipment: Shipment,
    driver: Driver
  ): number {
    const streetName = StringUtils.getStreetName(shipment.address);
    const vowels = StringUtils.countVowels(driver.name);
    const consonants = StringUtils.countConsonants(driver.name);

    const scoreMultiplier = StringUtils.isStringLengthEven(streetName)
      ? SuitabilityScoreMultiplier.ShipmentStreetNameEven
      : SuitabilityScoreMultiplier.ShipmentStreetNameOdd;

    return StringUtils.isStringLengthEven(streetName)
      ? vowels * scoreMultiplier
      : consonants * scoreMultiplier;
  }

  /**
   * applyCommonFactorMultiplier
   *
   * Applies common factor multiplier to the base score if applicable.
   * @param shipment The shipment (street address) for which the base score is calculated.
   * @param driver The driver for whom the base score is calculated.
   * @param baseScore The base score calculated for the given driver and shipment.
   * @returns The final suitability score after applying common factor multiplier.
   */
  private static applyCommonFactorMultiplier(
    shipment: Shipment,
    driver: Driver,
    baseScore: number
  ): number {
    const hasCommonFactors = MathUtils.hasCommonFactors(
      driver.name.length,
      StringUtils.getStreetName(shipment.address).length
    );
    const commonFactorMultiplier = hasCommonFactors
      ? SuitabilityScoreMultiplier.ShipmentStreetNameDriverNameCommonFactor
      : 1;

    return baseScore * commonFactorMultiplier;
  }
}
