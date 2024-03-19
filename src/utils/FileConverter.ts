/**
 * FileConverter.ts
 *
 * This file contains the FileConverter class, which provides utility methods for reading data from files and converting them into object arrays.
 */
import * as fs from 'fs';
import {Driver} from '../models/Driver';
import {Shipment} from '../models/Shipment';
import {ModelType} from '../enums/ModelType';

/**
 * FileConverter
 *
 * Utility class for reading data from files and converting them into object arrays.
 */
export class FileConverter {
  /**
   * Reads data from the specified file.
   * @param filename The name of the file to read.
   * @returns The data read from the file.
   * @throws Error if the file type is not supported or an error occurs while reading the file.
   */
  static readDataFromFile(filename: string): string {
    const fileParts = filename.split('.');
    const fileType = fileParts[fileParts.length - 1].toLowerCase();
    if (fileType !== 'txt') {
      throw new Error(
        `Unsupported file type: ${fileType}. Only .txt files are supported.`
      );
    }

    return fs.readFileSync(filename, 'utf8');
  }

  /**
   * Parses an array of strings into an array of Driver objects.
   * @param dataArray The array of strings to parse.
   * @returns An array of Driver objects.
   */
  static parseDrivers(dataArray: string[]): Driver[] {
    return dataArray.map(name => ({name}) as Driver);
  }

  /**
   * Parses an array of strings into an array of Shipment objects.
   * @param dataArray The array of strings to parse.
   * @returns An array of Shipment objects.
   */
  static parseShipments(dataArray: string[]): Shipment[] {
    return dataArray.map(address => ({address}) as Shipment);
  }

  /**
   * Converts data from a file into an array of objects based on the specified model type: Driver or Shipment.
   * @param filename The name of the file to read.
   * @param modelType The type of object to convert to (Driver or Shipment).
   * @returns An array of objects of the specified model type.
   * @throws Error if the model type is not supported or an error occurs while reading or parsing the file.
   */
  static convertToObjectArray(
    filename: string,
    modelType: ModelType
  ): Driver[] | Shipment[] {
    try {
      const data = this.readDataFromFile(filename);
      const dataArray = data.split('\n').map((item: string) => item.trim());

      // Future Enhancement: Create BaseModel Class and use ModelFactory
      switch (modelType) {
        case ModelType.Driver:
          return this.parseDrivers(dataArray);
        case ModelType.Shipment:
          return this.parseShipments(dataArray);
        default:
          throw new Error(
            `Unsupported object type: ${modelType}. Only 'driver' or 'shipment' are supported.`
          );
      }
    } catch (error) {
      console.error(`Error reading file ${filename}: ${error}`);
      return [];
    }
  }
}
