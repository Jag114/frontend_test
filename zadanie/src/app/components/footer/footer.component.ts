import { NgIf } from "@angular/common";
import { NgClass } from "@angular/common";
import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ShareVariableService } from "../../services/share-variable.service";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgIf, NgClass, HeaderComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private sharedVarService: ShareVariableService) {}

  showNameVar:any;
  show = false;
  isSpinning = false;

  changeVisibility(){
    this.show = !this.show;
  }

  showName(){
    this.showNameVar = this.sharedVarService.getVar();
    console.log(this.showNameVar.source);
    
    this.sharedVarService.setVar(!(this.sharedVarService.getVar()));
    console.log(this.sharedVarService.getVar());

  }

  spin(){
    this.isSpinning = true;
    setTimeout(() => this.isSpinning = false, 1000);
  }
}
