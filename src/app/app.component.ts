import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { /* TODO document why this constructor is empty */  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  
  }
  first: string | undefined;
  last : string | undefined;
  email: string | undefined;
  phone : null | undefined;
  text : string | undefined;
  getValue(f:string,l:string,e:string,p:null,t:string){
    this.first = f;
    this.last = l;
    this.email = e;
    this.phone = p;
    this.text = t;

  }
}
