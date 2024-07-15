import { Component } from '@angular/core';

import { RightComponent } from '../right/right.component';
import { MiddleComponent } from '../middle/middle.component';
import { LeftComponent } from '../left/left.component';

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [RightComponent, MiddleComponent, LeftComponent],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.scss'
})
export class WrapperComponent {

}
