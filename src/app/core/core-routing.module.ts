import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CoreModule } from './core.module';
import { ComponentsModule } from '../components/components.module';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'components', loadChildren: () => ComponentsModule
  },
  // {
  //   path: 'components', loadChildren: 'app/components/components.module#ComponentsModule'
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
