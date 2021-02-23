import { NgModule } from '@angular/core';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';

const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'route-nr-1',
    component: ComponentAComponent,
  },
  {
    path: 'route-nr-2',
    component: ComponentBComponent,
  },
  {
    path: '',
    redirectTo: '/sign-in',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
