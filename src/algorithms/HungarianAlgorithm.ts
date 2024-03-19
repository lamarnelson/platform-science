/**
 * HungarianAlgorithm.ts
 *
 * This file contains the HungarianAlgorithm class, which implements the AlgorithmInterface.
 * It provides an implementation of the assignShipmentsToDrivers method using the Hungarian algorithm.
 */

import {type AlgorithmInterface} from './AlgorithmInterface';
import {type Shipment} from '../models/Shipment';
import {type Driver} from '../models/Driver';
import {type ShipmentRoutes} from '../models/ShipmentRoutes';
import {BaseSuitabilityCalculator} from '../calculators/BaseSuitabilityCalculator';
import {Munkres} from 'munkres-js';
import {Route} from '../models/Route';

/**
 * HungarianAlgorithm
 *
 * This class provides an implementation of the AlgorithmInterface.
 * It assigns shipments to drivers based on a Hungarian algorithm.
 * (See Documentation for more information)
 */
export class HungarianAlgorithm implements AlgorithmInterface {
  /**
   * assignShipmentsToDrivers
   *
   * Assigns shipments to drivers using the Hungarian algorithm.
   * @param shipments An array of shipments (street addresses) to be assigned to drivers.
   * @param drivers An array of drivers available for shipment routes.
   * @returns A ShipmentRoutes object containing the assigned routes for shipments.
   */
  assignShipmentsToDrivers(
    shipments: Shipment[],
    drivers: Driver[]
  ): ShipmentRoutes {
    // Convert shipments and drivers to cost matrix
    const costMatrix = this.convertToCostMatrix(shipments, drivers);

    // Negate the cost matrix to maximize SS score
    const negatedCostMatrix = costMatrix.map(row => row.map(score => -score));

    // Apply Hungarian algorithm to find optimal route
    const munkres = new Munkres();
    const indices = munkres.compute(negatedCostMatrix);

    let maxSuitabilityScore = 0;
    const routes: Route[] = [];

    // Iterate over assigned indices and populate routes array
    for (const [shipmentIndex, driverIndex] of indices) {
      const shipment = shipments[shipmentIndex];
      const driver = drivers[driverIndex];
      const suitabilityScore = -negatedCostMatrix[shipmentIndex][driverIndex];
      maxSuitabilityScore -= negatedCostMatrix[shipmentIndex][driverIndex]; // Subtracting since scores were negated
      routes.push({shipment, driver, suitabilityScore});
    }

    return {maxSuitabilityScore, routes};
  }

  /**
   * convertToCostMatrix
   *
   * Converts shipments and drivers into a cost matrix.
   * @param shipments An array of shipments.
   * @param drivers An array of drivers.
   * @returns A 2D array representing the cost matrix.
   */
  convertToCostMatrix(shipments: Shipment[], drivers: Driver[]): number[][] {
    const numShipments = shipments.length;
    const numDrivers = drivers.length;

    // Initialize cost matrix with zeros
    const costMatrix: number[][] = new Array(numShipments)
      .fill(0)
      .map(() => new Array(numDrivers).fill(0));

    // Populate cost matrix with suitability scores
    for (let i = 0; i < numShipments; i++) {
      for (let j = 0; j < numDrivers; j++) {
        const score = BaseSuitabilityCalculator.calculateSuitabilityScore(
          shipments[i],
          drivers[j]
        );
        costMatrix[i][j] = score;
      }
    }

    return costMatrix;
  }
}
