import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  constructor(private router:Router, private form:FormsModule) { }

  ngOnInit() {
  }

  logoutUser(event){
    event.preventDefault();
    localStorage.clear();
    console.log(localStorage);
    this.router.navigateByUrl('/login');
  }
}
