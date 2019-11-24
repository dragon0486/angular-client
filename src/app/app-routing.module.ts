import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TodoTableComponent } from './components/todo-table/todo-table.component';
import { TodoForComponent } from './components/todo-for/todo-for.component';
import { SigninOidcComponent } from './oidc/signin-oidc/signin-oidc.component';
import { RedirectSilentRenewComponent } from './oidc/redirect-silent-renew/redirect-silent-renew.component';


const routes: Routes = [
  {
    path:'dashbord',
    component:DashboardComponent
  }, 
  {
    path:'todo',
    component:TodoTableComponent
  },
  {
    path:'add-todo',
    component:TodoForComponent
  },
  {
    path:'signin-oidc',
    component:SigninOidcComponent
  },
  {
    path:'redirect-silentrenew',
    component:RedirectSilentRenewComponent
  },
  {
    path:'**',
    redirectTo:'dashbord'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
