import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import {NumbersService} from "../numbers.service";

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  numbers = [];
  myGroup: FormGroup;

  firstNoControl = new FormControl('',Validators.required);
  secondNoControl = new FormControl('',Validators.required);


  constructor(fb: FormBuilder, private numbersService: NumbersService) {
    this.myGroup = fb.group({
      name: new FormControl('default value',Validators.required),
      firstNoControl: this.firstNoControl,
      secondNoControl: this.secondNoControl,
    });

    this.firstNoControl.valueChanges
        .filter(value => isInt(value))
          .map(valueStr => parseInt(valueStr))
            .map(number => number * 2)
              .subscribe(value => {
                this.secondNoControl.setValue(value);
      });

  }

  ngOnInit() {
  }

  onSubmit()
  {
    //console.log(this.myGroup);
    //console.log(this.myGroup.value.name);
    debugger;
    this.numbersService.getNumbers(this.firstNoControl.value)
      .subscribe((values) => {
        this.numbers = values.json();
      });

  }



}


function isInt(value)
{
  return !isNaN(value) &&
    parseInt(<any>(value)) == value &&
    !isNaN(parseInt(value, 10));
}
