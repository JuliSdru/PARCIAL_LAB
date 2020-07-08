import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import * as jwt_decode from "jwt-decode";




@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  user;
  constructor() { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    const payload = jwt_decode(token);
  
    this.user = payload.email;
    console.log(this.user);
  }

}
