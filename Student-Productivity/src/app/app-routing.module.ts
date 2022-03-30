import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountdownModule } from 'ngx-countdown';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), CountdownModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
