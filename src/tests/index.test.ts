// external
import { expect } from 'chai';

// global
import {
  DefaultPurposeSubCategoryType,
  DefaultDataSubCategoryType,
  RequestAction,
} from '../index';

describe('RequestAction contains ACCESS', () => {
  it('should test', () => {
    expect(Object.values(RequestAction)).contains('ACCESS');
  });

  it('should find email among DefaultDataSubCategoryType', () => {
    expect(Object.values(DefaultDataSubCategoryType)).contains('EMAIL');
  });

  it('should find essential among DefaultPurposeSubCategoryType', () => {
    expect(Object.values(DefaultPurposeSubCategoryType)).contains('ESSENTIAL');
  });
});
