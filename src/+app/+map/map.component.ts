import { Component, Inject, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'foodtrucks-map',
	styles: [`
		.sebm-google-map-container {
			height: 300px;
		}
	`],
  template: `
		<sebm-google-map [latitude]="lat" [longitude]="lng"></sebm-google-map>
	`
})

export class MapComponent {
  lat: number = 51.678418;
  lng: number = 7.809007;
}
