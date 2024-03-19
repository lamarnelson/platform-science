/**
 * ShipmentRoutePrinter.ts
 *
 * This file contains the ShipmentRoutePrinter class, which is responsible for printing shipment routes.
 */
import {ShipmentRoutes} from '../models/ShipmentRoutes';
import {AlgorithmType} from '../enums/AlgorithmType';

/**
 * ShipmentRoutePrinter
 *
 * Utility class for printing shipment routes.
 */
export class ShipmentRoutePrinter {
  /**
   * Prints the shipment routes along with the matching algorithm used.
   * @param shipmentRoutes The shipment routes to be printed.
   * @param algorithm The algorithm type used for matching.
   * @param executionTime The time taken to complete the matching algorithm, in milliseconds.
   */
  static printShipmentRoutes(
    shipmentRoutes: ShipmentRoutes,
    algorithm: AlgorithmType,
    executionTime: number
  ): void {
    console.log('Matching Algorithm:', algorithm);
    console.log('Execution Time:', executionTime.toFixed(2), 'ms');
    console.log('Max Suitability Score:', shipmentRoutes.maxSuitabilityScore);
    console.log('Shipment Routes:', shipmentRoutes.routes);
  }
}
