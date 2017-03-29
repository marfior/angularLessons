import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Output() changes : EventEmitter<number> = new EventEmitter();

  counter: number = 0;

  constructor() {
    this.counter = 0;
  }

  ngOnInit() {
  }

  public change(value)
  {
    this.counter += value;
    this.changes.emit(this.counter);
  }


}
