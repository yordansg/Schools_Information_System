import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@elements/core/auth.guard';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomeComponent } from './home.component';
import { ElementListDetailsComponent } from './element-list-details/element-list-details.component';
import { ElementListsComponent } from './element-lists/element-lists.component';
import { SchoolTypesComponent } from './school-types/school-types.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  canActivate: [
    AuthGuard
  ],
  children: [
    {
      path: 'school-types',
      component: SchoolTypesComponent
    },
    {
      path: 'info',
      component: FavoritesComponent
    },
    {
      path: 'lists',
      component: ElementListsComponent
    },
    {
      path: 'lists/:id',
      component: ElementListDetailsComponent
    },
    {
      path: '',
      redirectTo: '/home/school-types',
      pathMatch: 'full'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
