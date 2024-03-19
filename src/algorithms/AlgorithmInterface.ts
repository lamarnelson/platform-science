/**
 * AlgorithmInterface.ts
 *
 * This file contains the AlgorithmInterface interface, which defines the contract for algorithms to assign shipments to drivers.
 * It specifies a method to assign shipments to drivers and return the resulting shipment routes.
 */

import {type Driver} from '../models/Driver';
import {type Shipment} from '../models/Shipment';
import {type ShipmentRoutes} from '../models/ShipmentRoutes';

/**
 * AlgorithmInterface
 *
 * This interface defines the contract for algorithms to assign shipments to drivers.
 */
export interface AlgorithmInterface {
  /**
   * assignShipmentsToDrivers
   *
   * Assigns shipments to drivers based on the implemented algorithm.
   * @param shipments An array of shipments (street addresses) to be assigned to drivers.
   * @param drivers An array of drivers available for shipment routes.
   * @returns A ShipmentRoutes object containing the assigned routes for shipments.
   */
  assignShipmentsToDrivers: (
    shipments: Shipment[],
    drivers: Driver[]
  ) => ShipmentRoutes;
}
