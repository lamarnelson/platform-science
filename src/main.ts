/**
 * main.ts
 *
 * Contains the main functionality of the application.
 * Loads drivers and shipments data, runs the matching algorithm, and prints the shipment routes.
 */
import * as appConfig from '../app.config.json';
import {AlgorithmFactory} from './algorithms/AlgorithmFactory';
import {AlgorithmType} from './enums/AlgorithmType';
import {ModelType} from './enums/ModelType';
import {type AppConfig} from './models/AppConfig';
import {type Driver} from './models/Driver';
import {type Shipment} from './models/Shipment';
import {FileConverter} from './utils/FileConverter';
import {ShipmentRoutePrinter} from './utils/ShipmentRoutePrinter';

/**
 * Main function of the application.
 * Loads drivers and shipments data, runs the matching algorithm, and prints the shipment routes.
 * @param shipmentFile The file containing shipment data.
 * @param driverFile The file containing driver data.
 */
export function main(shipmentFile: string, driverFile: string): void {
  try {
    const {drivers, shipments} = loadDriversAndShipments(
      shipmentFile,
      driverFile
    );
    runMatchingAlgorithm(drivers, shipments);
  } catch (error) {
    console.error('An error occurred:', error.message);
    process.exit(1);
  }
}

/**
 * Loads drivers and shipments data from files.
 * @param shipmentFile The file containing shipment data.
 * @param driverFile The file containing driver data.
 * @returns An object containing arrays of drivers and shipments.
 */
function loadDriversAndShipments(
  shipmentFile: string,
  driverFile: string
): {drivers: Driver[]; shipments: Shipment[]} {
  const drivers: Driver[] = FileConverter.convertToObjectArray(
    `./data/${driverFile}`,
    ModelType.Driver
  ) as Driver[];

  const shipments: Shipment[] = FileConverter.convertToObjectArray(
    `./data/${shipmentFile}`,
    ModelType.Shipment
  ) as Shipment[];

  return {drivers, shipments};
}

/**
 * Runs the matching algorithm to assign shipments (street addresses) to drivers and prints the results.
 * @param drivers An array of drivers.
 * @param shipments An array of shipments.
 */
function runMatchingAlgorithm(drivers: Driver[], shipments: Shipment[]): void {
  // Check if data is available
  if (drivers.length === 0 || shipments.length === 0) {
    console.error('No drivers or shipments data available.');
    return;
  }

  // Check if the number of drivers matches the number of shipments
  if (drivers.length !== shipments.length) {
    console.error('Drivers and shipments data must be the same length.');
    return;
  }

  // Get the algorithm type from the application configuration
  const config: AppConfig = appConfig as AppConfig;
  const algorithmType: AlgorithmType = config.algorithm;
  const algorithmConfig = {
    algorithm: algorithmType,
  };

  // Start tracking execution time
  const startTime = performance.now();

  // Set Algorithm instance then assign shipments to drivers
  const algorithm = AlgorithmFactory.createAlgorithm(algorithmConfig);
  const routes = algorithm.assignShipmentsToDrivers(shipments, drivers);

  // End tracking execution time
  const endTime = performance.now();

  // Calculate the execution time
  const executionTime = endTime - startTime;

  // Print the shipment routes along with the execution time
  ShipmentRoutePrinter.printShipmentRoutes(
    routes,
    algorithmType,
    executionTime
  );
}
