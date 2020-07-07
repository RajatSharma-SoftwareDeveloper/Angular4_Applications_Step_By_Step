import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-derived-property',
  templateUrl: './derived-property.component.html',
  styleUrls: ['./derived-property.component.css']
})
export class DerivedPropertyComponent implements OnInit {

  email ="example@gmail.com";

  constructor() { }

  ngOnInit(): void {
  }


  getEmailInTwoBinding()
  {

    console.log("Email in console.=" ,this.email);

   
  }

}
