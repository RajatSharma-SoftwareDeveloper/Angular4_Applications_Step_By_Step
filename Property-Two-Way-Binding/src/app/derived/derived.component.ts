import { DerivedDataService } from './../derived-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-derived',
  templateUrl: './derived.component.html',
  styleUrls: ['./derived.component.css']
})
export class DerivedComponent implements OnInit {

  
  originalDerivedFormula : string;
  vectorNames:any[];
  constructor(private _derivedDataService:DerivedDataService) {

    this.vectorNames =this._derivedDataService.getListofVectorNamesForOriginalFormula();

   }

  ngOnInit(): void {
  }


  getDerivedGraphFormula()
  {
    this.originalDerivedFormula = "{SysStatsLinuxExtended}{CPU Uilization}[All]";
    return this.originalDerivedFormula;
  }


  getListOfVector()
  {

  this.vectorNames =this._derivedDataService.getListofVectorNamesForOriginalFormula();
    return this.vectorNames;
  }




}
