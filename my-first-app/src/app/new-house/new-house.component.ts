import { Component, OnInit } from '@angular/core';
import { House } from './houseClass';

@Component({
  selector: 'app-new-house',
  templateUrl: './new-house.component.html',
  styleUrls: ['./new-house.component.css']
})
export class NewHouseComponent implements OnInit {

  house: House = {
    name: '',
    color: '',
    ownerName: '',
    numOfFloors: 2,
    numOfRoom: 4,
    hasLift: false,
    address: ''
  }

  constructor() { }

  ngOnInit() {
  }

}
