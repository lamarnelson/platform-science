import {AlgorithmFactory} from '../src/algorithms/AlgorithmFactory';
import {AppConfig} from '../src/models/AppConfig';
import {AlgorithmType} from '../src/enums/AlgorithmType';
import {BaseAlgorithm} from '../src/algorithms/BaseAlgorithm';
import {HungarianAlgorithm} from '../src/algorithms/HungarianAlgorithm';

describe('AlgorithmFactory', () => {
  describe('createAlgorithm', () => {
    it('should create a BaseAlgorithm instance when AlgorithmType is Base', () => {
      const config: AppConfig = {algorithm: AlgorithmType.Base};
      const algorithm = AlgorithmFactory.createAlgorithm(config);
      expect(algorithm).toBeInstanceOf(BaseAlgorithm);
    });

    it('should create a HungarianAlgorithm instance when AlgorithmType is Hungarian', () => {
      const config: AppConfig = {algorithm: AlgorithmType.Hungarian};
      const algorithm = AlgorithmFactory.createAlgorithm(config);
      expect(algorithm).toBeInstanceOf(HungarianAlgorithm);
    });

    it('should throw an error for unsupported AlgorithmType', () => {
      const config: AppConfig = {
        algorithm: 'InvalidAlgorithm' as AlgorithmType,
      };
      expect(() => AlgorithmFactory.createAlgorithm(config)).toThrow(
        "Algorithm 'InvalidAlgorithm' not supported."
      );
    });

    it('should throw an error for invalid AppConfig', () => {
      const config: AppConfig = {algorithm: null};
      expect(() => AlgorithmFactory.createAlgorithm(config)).toThrow(
        'Invalid AppConfig. Algorithm not specified.'
      );
    });
  });
});
