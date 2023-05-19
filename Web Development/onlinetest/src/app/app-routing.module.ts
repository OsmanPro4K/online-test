import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SelectionComponent } from './selection/selection.component';

import { SoftwarequestionComponent } from './questions/softwarequestion/softwarequestion.component';
import { HardwarequestionComponent } from './questions/hardwarequestion/hardwarequestion.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'selection', component: SelectionComponent },
  { path: 'softwarequestion', component: SoftwarequestionComponent},
  { path: 'hardwarequestion', component: HardwarequestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
