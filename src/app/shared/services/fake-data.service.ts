import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FakeDataService {
  data = { name: 'Jose', age: 30 };
  constructor() {}

  updateAge(age: number) {
    this.data.age = age;
  }
}
