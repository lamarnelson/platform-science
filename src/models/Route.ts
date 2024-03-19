/**
 * Route.ts
 *
 * This file contains the Route interface, which represents a route consisting of a shipment, a driver, and a suitability score.
 * It includes properties to store details about the shipment, the driver, and the suitability score of the route.
 */
import type {Shipment} from './Shipment';
import type {Driver} from './Driver';

/**
 * Route
 *
 * Interface representing a route consisting of a shipment, a driver, and a suitability score.
 */
export interface Route {
  /**
   * The shipment associated with the route.
   */
  shipment: Shipment;

  /**
   * The driver associated with the route.
   */
  driver: Driver;

  /**
   * The suitability score of the route.
   */
  suitabilityScore: number;
}
