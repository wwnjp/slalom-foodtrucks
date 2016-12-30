import { Component, Directive, ElementRef, Renderer, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'app',
  styleUrls: [ '../style/base.scss' ],
  templateUrl: 'app.component.html'
})
export class AppComponent {}
