import { Component, Input } from '@angular/core';

import { Foodtruck } from './foodtruck.schema';

@Component({
  selector: 'foodtruck',
  styleUrls: ['foodtruck.component.scss'],
  templateUrl: 'foodtruck.component.html'
})
export class FoodtruckComponent {
  @Input() foodtrucks: Foodtruck[];

}
