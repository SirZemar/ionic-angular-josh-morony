import { Directive } from '@angular/core';

  @Directive({
    selector: '[appBigAlert]',
    host: {
      '[style.color]': '"red"',
      '[style.font-size]': '"1.5em"',
    },
  })
  export class BigAlertDirective {
    constructor() {}
  }
