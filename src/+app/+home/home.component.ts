import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

import { ModelService } from '../shared/model/model.service';
import { FoodtruckComponent } from '../foodtruck/foodtruck.component';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'home',
  styleUrls: [ './home.component.scss' ],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  data: any = [];
  constructor(public model: ModelService) {

    // we need the data synchronously for the client to set the server response
    // we create another method so we have more control for testing
    this.universalInit();
  }

  universalInit() {
    this.model.get('/data.json').subscribe(data => {
      for (let d in data.data.vendors) {
        this.data.push(data.data.vendors[d]);
      }
    });
  }

}
