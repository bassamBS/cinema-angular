import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { EditShowViewComponent } from './views/edit-show-view/edit-show-view.component';
import { ErrorViewComponent } from './views/error-view/error-view.component';
import { NewShowViewComponent } from './views/new-show-view/new-show-view.component';
import { ShowsViewComponent } from './views/shows-view/shows-view.component';
import { SingleShowViewComponent } from './views/single-show-view/single-show-view.component';

const routes: Routes = [
  {path: '', canActivate:[AuthGuard], component: AuthViewComponent},
  {path: 'home', canActivate:[AuthGuard], component: ShowsViewComponent},
  {path: 'shows/new', canActivate:[AuthGuard], component: NewShowViewComponent},
  {path: 'shows/:id', canActivate:[AuthGuard], component: SingleShowViewComponent},
  {path: 'shows/:id/edit', canActivate:[AuthGuard], component: EditShowViewComponent},
  {path: 'login', component: AuthViewComponent},
  {path: 'not-found', component: ErrorViewComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
