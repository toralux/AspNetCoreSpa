import { Component } from '@angular/core';
import { routerTransition, hostStyle } from '../router.animations';

@Component({
  selector: 'appc-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  animations: [routerTransition()],
  host: hostStyle()
})
export class ExamplesComponent { }
