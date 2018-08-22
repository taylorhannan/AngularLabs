import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localstorage',
  templateUrl: './localstorage.component.html',
  styleUrls: ['./localstorage.component.css']
})
export class LocalstorageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var output = "hello";
    document.getElementById('localstorageData').innerHTML += JSON.stringify(localStorage); 

    console.log(localStorage);
    /*for (var key in localStorage) {
      console.log(key + ' ' + localStorage[key]);
    }*/
  }

}
