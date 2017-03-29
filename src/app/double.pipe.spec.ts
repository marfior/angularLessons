/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { DoublePipe } from './double.pipe';

describe('DoublePipe', () => {
  it('create an instance', () => {
    const pipe = new DoublePipe();
    expect(pipe).toBeTruthy();
  });

  it('should double the number when transform is called', () => {
    const pipe = new DoublePipe();
    let transformOutput = pipe.transform(5);
    expect(transformOutput).toBe(10);
  });
});
