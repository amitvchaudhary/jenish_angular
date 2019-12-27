import { Component, OnInit } from '@angular/core';
import { Car } from '../core/car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  carList: Car[] = [];

  ngOnInit() {
  }

  addCar(owner: string, model: string, seater: number, open: boolean, color: string) {
    const car = new Car();
    car.modelName = model;
    car.companyName = 'Audi';
    car.ownerName = owner;
    car.color = color;
    car.isOpenCar = open;
    car.numOfSeats = seater;
    car.numOfDoors = car.numOfSeats;

    this.carList.push(car);
  }
}