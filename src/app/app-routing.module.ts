import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ActivateGuard } from './shared/guards/activate.guard';
import { DeactivateGuard } from './shared/guards/deactivate.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'about',
    component:AboutComponent,
    canActivate:[ActivateGuard]
    
  },
  {
    path:'contact',
    component:ContactComponent,
    canActivate:[ActivateGuard],
    canDeactivate:[DeactivateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
