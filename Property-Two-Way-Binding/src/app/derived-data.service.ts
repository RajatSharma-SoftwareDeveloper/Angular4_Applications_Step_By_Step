import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DerivedDataService {

  constructor() { }


  vectorNamesForOriginalFormula:any[];


  getListofVectorNamesForOriginalFormula()
  {

    this.vectorNamesForOriginalFormula = [ "Cavisson>NDAppliance" , "AppTier>Server50" ,"GuiDevTier>Server100"];

    return this.vectorNamesForOriginalFormula;

  }


}
