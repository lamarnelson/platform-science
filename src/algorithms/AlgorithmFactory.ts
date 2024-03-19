/**
 * AlgorithmFactory.ts
 *
 * This file contains the AlgorithmFactory class, which is responsible for creating algorithm instances based on the provided AppConfig.
 * It provides a method to create an instance of AlgorithmInterface based on the specified algorithm type in the AppConfig.
 */

import {type AppConfig} from '../models/AppConfig';
import {type AlgorithmInterface} from './AlgorithmInterface';
import {BaseAlgorithm} from './BaseAlgorithm';
import {HungarianAlgorithm} from './HungarianAlgorithm';
import {AlgorithmType} from '../enums/AlgorithmType';

/**
 * AlgorithmFactory
 *
 * This class provides a factory method to create instances of AlgorithmInterface based on the specified algorithm type in the AppConfig.
 */
export class AlgorithmFactory {
  /**
   * createAlgorithm
   *
   * Creates an instance of AlgorithmInterface based on the specified algorithm type in the AppConfig.
   * @param appConfig The AppConfig object containing information about the algorithm to be created.
   * @returns An instance of AlgorithmInterface corresponding to the specified algorithm type.
   * @throws Error if the provided AppConfig is invalid or the specified algorithm is not supported.
   */
  static createAlgorithm(appConfig: AppConfig): AlgorithmInterface {
    // Check if AppConfig or algorithm is not specified
    if (!appConfig || !appConfig.algorithm) {
      throw new Error('Invalid AppConfig. Algorithm not specified.');
    }

    // Create algorithm instance based on the specified algorithm type
    switch (appConfig.algorithm) {
      case AlgorithmType.Base:
        return new BaseAlgorithm();
      case AlgorithmType.Hungarian:
        return new HungarianAlgorithm();
      default:
        throw new Error(`Algorithm '${appConfig.algorithm}' not supported.`);
    }
  }
}
