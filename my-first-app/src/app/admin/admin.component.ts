import { Component, OnInit } from '@angular/core';
import { NamingService } from './naming.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private namingService: NamingService) { }

  ngOnInit() {
    this.setModuleName();
  }

  moduleName: string = '';

  setModuleName() {
    this.moduleName = this.namingService.getModuleName();
  }

}
