import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../core/car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  @Input() carList: Car[] = [];

  @Input() moveTo: string;

  @Output() swapCar = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  moveCar(CAR_LIST, INDEX) {
    let data: any = {
      'carList': CAR_LIST,
      'index': INDEX
    }
    this.swapCar.emit(data);
  }

}