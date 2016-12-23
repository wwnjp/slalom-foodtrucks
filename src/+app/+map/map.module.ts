import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { SharedModule } from '../shared/shared.module';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';

@NgModule({
  imports: [
    SharedModule,
    MapRoutingModule,
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDkRQrJpqAUnGY_GXu__6xBn6QgJZY_3Js'
    })
  ],
  declarations: [ MapComponent ],
  bootstrap: [ MapComponent ]
})
export class MapModule { }
