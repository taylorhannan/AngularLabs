import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string = '';
  password:string = '';
  dob:string = '';
  age:string = '';
  constructor(private router:Router,private form:FormsModule) { }

  ngOnInit() {
  }

  loginUser(event){
    event.preventDefault();
    if (typeof(Storage) !== "undefined"){
      //console.log('storage ready');
      localStorage.setItem("id", "1");
      localStorage.setItem("username", this.username);
      localStorage.setItem("password", this.password);
      localStorage.setItem("dob", this.dob);
      localStorage.setItem("age", this.age);
      console.log(localStorage);
    }else{
      console.log('storage undefined yo');
    }

    if (this.username == "taylor" && this.password == "123"){
      this.router.navigateByUrl('/account');
    }else{
      alert("Wrong username/password!");
    }
  }
}
