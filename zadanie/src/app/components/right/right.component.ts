import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import * as data from "../../../assets/data/text-data.json"

@Component({
  selector: 'app-right',
  standalone: true,
  imports: [NgIf],
  templateUrl: './right.component.html',
  styleUrl: './right.component.scss',
})
export class RightComponent{
  
  texts:any = (data as any).default; //string arr
  text:string = "";

  doSth(){
    this.text += this.texts[0].text;
    console.log(this.texts)
  }
 
}
