/**
 * ShipmentRoutes.ts
 *
 * This file contains the ShipmentRoutes interface, which represents the routes matched for shipments.
 * It includes properties to store the maximum suitability score and the details of each shipment route (street address -> driver).
 */
import {Route} from './Route';

/**
 * ShipmentRoutes
 *
 * Interface representing the routes generated for shipments.
 */
export interface ShipmentRoutes {
  /**
   * The maximum suitability score achieved among all routes.
   */
  maxSuitabilityScore: number;

  /**
   * The details of each shipment route.
   */
  routes: Route[];
}
