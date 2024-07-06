import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarlicorComponent } from './licor/pages/listarlicor/listarlicor.component';
import { HomeComponent } from './licor/pages/home/home.component';
import { AgregarlicorComponent } from './licor/pages/agregarlicor/agregarlicor.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'list',
    component:ListarlicorComponent,
    pathMatch:'full'
  },
  {
    path:'add',
    component:AgregarlicorComponent,
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
