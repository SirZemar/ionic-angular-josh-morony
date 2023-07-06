import { Pipe, PipeTransform } from '@angular/core';
import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  let pipe: PipeTransform;

  beforeEach(() => {
    pipe = new ReversePipe();
    return pipe;
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should reverse a string', () => {
    expect(pipe.transform('abC  0 ,')).toBe(', 0  Cba');
  });
});
