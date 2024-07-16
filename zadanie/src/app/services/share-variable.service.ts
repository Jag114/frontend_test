import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShareVariableService {
  private sharedVarSubject = new BehaviorSubject<any>(null);
  sharedVar = this.sharedVarSubject.asObservable();

  constructor() {}

  getVar(){
    return this.sharedVar;
  }

  setVar(value: boolean){
    this.sharedVarSubject.next(value);
  }
}
