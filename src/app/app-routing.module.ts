import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolsNavComponent } from './tools-nav/tools-nav.component';
import { ActivityNavComponent } from './activity-nav/activity-nav.component';

const routes: Routes = [
  {path:'navbar',component:NavbarComponent},
  {path:'tools',component:ToolsNavComponent},
  {path:'activity',component:ActivityNavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
