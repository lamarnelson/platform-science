/**
 * BaseAlgorithm.ts
 *
 * This file contains the BaseAlgorithm class, which implements the AlgorithmInterface.
 * It provides an implementation of the assignShipmentsToDrivers method based on a base algorithm.
 */

import {type AlgorithmInterface} from './AlgorithmInterface';
import {type Shipment} from '../models/Shipment';
import {type Driver} from '../models/Driver';
import {type ShipmentRoutes} from '../models/ShipmentRoutes';
import {BaseSuitabilityCalculator} from '../calculators/BaseSuitabilityCalculator';
import {Route} from '../models/Route';

/**
 * BaseAlgorithm
 *
 * This class provides an implementation of the AlgorithmInterface.
 * It assigns shipments to drivers based on a base algorithm.
 * (See Documentation for more information)
 */
export class BaseAlgorithm implements AlgorithmInterface {
  /**
   * assignShipmentsToDrivers
   *
   * Assigns shipments to drivers based on a base algorithm.
   * @param shipments An array of shipments (street addresses) to be assigned to drivers.
   * @param drivers An array of drivers available for shipment routes.
   * @returns A ShipmentRoutes object containing the assigned routes for shipments.
   */
  assignShipmentsToDrivers(
    shipments: Shipment[],
    drivers: Driver[]
  ): ShipmentRoutes {
    const routes: Route[] = [];
    let maxSuitabilityScore = 0;

    // Iterate over shipments and drivers simultaneously
    for (let i = 0; i < shipments.length; i++) {
      const shipment = shipments[i];
      const driver = drivers[i];

      const suitabilityScore =
        BaseSuitabilityCalculator.calculateSuitabilityScore(shipment, driver);

      maxSuitabilityScore += suitabilityScore;
      routes.push({shipment, driver, suitabilityScore});
    }

    return {maxSuitabilityScore, routes};
  }
}
