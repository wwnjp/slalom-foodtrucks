import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { FoodtruckComponent } from '../foodtruck/foodtruck.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [
    FoodtruckComponent,
    HomeComponent
  ]
})
export class HomeModule { }
