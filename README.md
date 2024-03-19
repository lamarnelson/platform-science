# Platform Science - Coding Challenge (SDE)

This project implements a Shipment Matching Routing System that assigns shipments to drivers based on their suitability scores. It offers various algorithms to optimize the assignment process.

## Setup

1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Ensure that Node.js and Webpack is installed on your system.

## Usage

To use the Application, follow these steps:

- Place your data files in the 'data' folder.
- Execute Script:

```bash
npm start <shipment-file.txt> <driver-file.txt>
```

Replace `<shipment-file.txt>` and `<driver-file.txt>` with the names of your shipment (street addresses) and driver files.

- Other available commands:
- `npm run build`: Build the project for production.
- `npm run watch`: Watch for changes and rebuild the project in development mode.
- `npm test`: Run tests.
- `npm run prettier`: Format code with Prettier.
- `npm run lint`: Lint code with ESLint.

## Notes

The example provided in the prompt mismatches with the results in this application:
```text
1. '44 Fake Dr.' have a string length of 11 (odd)
2. 'Daniel Davidson' have 8 consonants (excluding '.') and a string length of 15
3. 11 and 15 does not share a common factor
4. Final SS = 8 (consonants) * 1 (SS Street Name Odd Multiplier) * 1 (No Common Factor Multiplier)
5. Final Suitability Score = 8
```

Due to time constraints, the following advanced features were not implemented in this application:

- Advanced design patterns and OOP principles
- Advanced testing and logging; however, a sample test case for AlgorithmFactory.ts is included for demonstration purposes.
- For readability purposes within this project, the concept of 'street addresses' is represented within the context of the 'shipment' model. Instead of creating a separate 'streetAddress' model, the 'shipment' model includes a specific attribute to capture street addresses.

## Documentation

Please refer to the following documentation for more details:

- [Algorithm Documentation](documentation/Algorithms.md): Details about the algorithms used in the project.
- [Code Organization](documentation/Code_Organization.md): Explanation of the code organization and structure.

## Support

If you encounter any issues or have questions, please contact me:

- Email: [lamarnelson007@gmail.com](mailto:lamarnelson007@gmail.com)
