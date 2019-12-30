import { Component, OnInit } from '@angular/core';
import { Car } from '../core/car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  carList: Car[] = [];

  audiCars: string[] = ['Audi A3', 'Audi A4', 'Audi A5'];

  bmwCars: string[] = ['BMW X3', 'BMW X5', 'BMW X7'];

  ferrariCars: string[] = ['Ferrari 488', 'Ferrari 812', 'Ferrari GTC4'];

  optData: string[];

  carBrand: string = "undefined";

  ngOnInit() {

  }

  addCar(owner: string, model: string, seater: number, open: boolean, color: string) {
    const car = new Car();
    car.modelName = model;
    car.brand = this.carBrand;
    car.ownerName = owner;
    car.color = color;
    car.isOpenCar = open;
    car.numOfSeats = seater;

    this.carList.push(car);
  }
}