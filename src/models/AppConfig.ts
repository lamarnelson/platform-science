/**
 * AppConfig.ts
 *
 * This file defines the AppConfig interface, representing the configuration for the application.
 * It includes the algorithm type that the application will use.
 */
import {AlgorithmType} from '../enums/AlgorithmType';

/**
 * AppConfig
 *
 * Interface representing the configuration for the application.
 */
export interface AppConfig {
  /**
   * The algorithm type that the application will use.
   */
  algorithm: AlgorithmType;
}
