import { Component, OnInit } from '@angular/core';
import { Car } from '../core/car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  carList: Car[] = [];

  prodCarList: Car[] = [];

  audiCars: string[] = ['Audi A3', 'Audi A4', 'Audi A5'];

  bmwCars: string[] = ['BMW X3', 'BMW X5', 'BMW X7'];

  ferrariCars: string[] = ['Ferrari 488', 'Ferrari 812', 'Ferrari GTC4'];

  optData: string[];

  carBrand: string = "Audi";

  ngOnInit() {
    this.addCar('jenish', 'A5', 2, true, 'black', 'stock');
    this.addCar('nil', 'A5', 4, false, 'blue', 'stock');
    this.addCar('mayur', 'A4', 2, true, 'red', 'stock');
    this.addCar('hima', 'A4', 4, false, 'blue', 'stock');
    this.addCar('parth', 'A3', 2, true, 'red', 'stock');
    this.addCar('aditi', 'A3', 4, false, 'black', 'stock');
  }

  addCar(owner: string, model: string, seater: number, open: boolean, color: string, status: string) {
    const car = new Car();
    car.modelName = model;
    car.brand = this.carBrand;
    car.ownerName = owner;
    // car.color = color;
    // car.isOpenCar = open;
    // car.numOfSeats = seater;
    // car.status = status;

    this.carList.push(car);
  }

  moveCar(arrayList, index) {
    if (arrayList === 'Production') {
      if (index === 0) {
        this.prodCarList.push(this.carList.shift());
      }
      else {
        this.prodCarList.push(this.carList[index]);
        this.carList.splice(index, 1);
      }
    }
    if (arrayList === 'Stock') {
      if (index === 0) {
        this.carList.push(this.prodCarList.shift());
      }
      else {
        this.carList.push(this.prodCarList[index]);
        this.prodCarList.splice(index, 1);
      }
    }
  }

  moveAllCar(value) {
    if (value === 'Production') {
      this.carList.forEach(element => {
        this.prodCarList.push(element);
        this.carList = [];
      });
    }
    if (value === 'Stock') {
      this.prodCarList.forEach(element => {
        this.carList.push(element);
        this.prodCarList = [];
      });
    }
  }

  swapCar(event) {
    this.moveCar(event['carList'], event['index']);
  }

}