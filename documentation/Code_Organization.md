# Code Organization

This document outlines the organization of the codebase for the Shipment and Driver Matching System.

## Project Structure

The project is structured as follows:

```
src/
│
├── algorithms/
│ ├── AlgorithmFactory.ts
│ ├── AlgorithmInterface.ts
│ ├── BaseAlgorithm.ts
│ └── HungarianAlgorithm.ts
│
├── enums/
│ ├── AlgorithmType.ts
│ └── ModelType.ts
│ └── SuitabilityScoreMultiplier.ts
│
├── models/
│ ├── AppConfig.ts
│ ├── Driver.ts
│ ├── Route.ts
│ ├── Shipment.ts
│ └── ShipmentRoutes.ts
│
├── utils/
│ ├── FileConverter.ts
│ ├── MathUtils.ts
│ ├── StringUtils.ts
│ └── ShipmentRoutePrinter.ts
├── index.ts
├── main.ts
```

## Description

- **algorithms**: Contains classes responsible for different matching algorithms, including the `BaseAlgorithm` and `HungarianAlgorithm`. The `AlgorithmFactory` class facilitates the creation of algorithm instances based on the provided configuration.

- **enums**: Defines enums used in the project, such as `AlgorithmType` and `ModelType`.

- **models**: Contains interfaces representing the data models used in the system, including `AppConfig`, `Driver`, `Shipment`, `Route`, and `ShipmentRoutes`.

- **utils**: Includes utility classes for file conversion, string manipulation, mathematical operations, and printing shipment routes.

- **main.ts**: Responsible for executing the matching algorithm between streets addresses (shipments) and drivers.

- **index.ts**: Entry point of the application.

## Drivers and Shipment Street Addresses Files

When working with drivers and shipment street address data files, follow these guidelines:

- Store all data files in the 'data' directory.
- Please input the street address before the driver's TXT file. Failing to do so may result in unexpected outcomes.
- Ensure that all files are in the .txt format, as the system only supports this file type.
