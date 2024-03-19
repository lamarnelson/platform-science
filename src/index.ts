/**
 * index.ts
 *
 * The entry point of the application.
 * Parses command-line arguments and invokes the main function.
 */
import {main} from './main';

// Extract shipment file and driver file from command-line arguments
const shipmentFile = process.argv[2];
const driverFile = process.argv[3];

// Check if both shipment file and driver file are provided
if (!shipmentFile || !driverFile) {
  console.error(
    'Usage: node dist/index.js <shipment-file.txt> <driver-file.txt>'
  );
  process.exit(1);
}

// Invoke the main function with shipment file and driver file as arguments
main(shipmentFile, driverFile);
