import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormSVComponent } from './form-sv/form-sv.component';
import { SvComponent} from './sv/sv.component';
import { LopComponent } from './lop/lop.component';

const routes: Routes = [
  {path: 'sv', component: SvComponent},
  {path: 'lop', component: LopComponent},
  {path:'', redirectTo: 'sv', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
