import { Component, OnInit } from '@angular/core';
import { House } from './houseClass';

@Component({
  selector: 'app-new-house',
  templateUrl: './new-house.component.html',
  styleUrls: ['./new-house.component.css']
})
export class NewHouseComponent implements OnInit {

  // house: House = {
  //   name: '',
  //   color: '',
  //   ownerName: '',
  //   numOfFloors: 2,
  //   numOfRoom: 4,
  //   hasLift: false,
  //   address: ''
  // }

  houseList: House[] = [];

  constructor() { }

  ngOnInit() {
  }

  createHouse() {
    const house = new House();
    house.name = 'KingsVilla';
    house.color = 'white';
    house.ownerName = 'jenish';
    house.hasLift = false;
    house.numOfFloors = 1;
    house.numOfRoom = 5;
    house.address = 'Somewhere, in the world';

    this.houseList.push(house);
  }

}
