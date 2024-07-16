import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { ShareVariableService } from '../../services/share-variable.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy{
  showName: any;
  subscription: Subscription = new Subscription;

  constructor(private sharedVarService: ShareVariableService) { }

  ngOnInit() {
    this.subscription = this.sharedVarService.sharedVar.subscribe(value => {
      this.showName = value;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  
}
