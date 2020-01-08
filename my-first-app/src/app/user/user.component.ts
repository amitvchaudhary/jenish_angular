import { Component, OnInit } from '@angular/core';
import { NamingService } from '../admin/naming.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private namingService: NamingService) { }

  ngOnInit() {
    console.log(this.namingService.getModuleName()); 
  }

}
