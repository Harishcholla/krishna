import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FifthPageComponent } from './fifth-page/fifth-page.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { SeventhPageComponent } from './seventh-page/seventh-page.component';

const routes: Routes = [
  { path: '' , component: FirstpageComponent },
  { path: 'second-page' , component: SecondpageComponent },
  { path: 'fifth-page' , component: FifthPageComponent },
  { path: 'seventh-page' , component: SeventhPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
