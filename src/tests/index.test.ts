// external
import { expect } from 'chai';

// global
import { RequestAction } from '../index';

describe('RequestAction contains ACCESS', () => {
  it('should test', () => {
    expect(Object.values(RequestAction)).contains('ACCESS');
  });
});
