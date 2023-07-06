import { Directive } from '@angular/core';
import { BigAlertDirective } from './big-alert.directive';

describe('BigAlertDirective', () => {
  let directive: Directive;

  beforeEach(() => {
    directive = new BigAlertDirective();
    return directive;
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  xit('should change styles'), () => {};
});
