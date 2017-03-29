import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class NumbersService {

  constructor(private http:Http) { }


  public getNumbers(number) {

    return this.http.get('/numbers/100');
  }

}
