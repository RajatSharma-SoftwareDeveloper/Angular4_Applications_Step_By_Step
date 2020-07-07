import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-custom',
  templateUrl: './pipe-custom.component.html',
  styleUrls: ['./pipe-custom.component.css']
})
export class PipeCustomComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }


  course ={

    price_currency : 150,
    current_date : new Date(7,7,2020),
    rating : 4.123,
    title: "The Pipe Example"


  }


  paragraphSummary = "Hello , I am explaning Custom Pipe .How we should be able to use transform method of PipeTransform Interace ."

}
