import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

export function getLazyModule() {
  return System.import('./+lazy/lazy.module' + (process.env.AOT ? '.ngfactory' : ''))
    .then(mod => mod[(process.env.AOT ? 'LazyModuleNgFactory' : 'LazyModule')]);
}

export function getMapModule() {
  return System.import('./+map/map.module' + (process.env.AOT ? '.ngFactory' : ''))
    .then(mod => mod[(process.env.AOT ? 'MapModuleNgFactory' : 'MapModule' )]);
}

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'lazy', loadChildren: getLazyModule },
      { path: 'foodtrucks-map', loadChildren: getMapModule }
    ])
  ],
})
export class AppRoutingModule { }
