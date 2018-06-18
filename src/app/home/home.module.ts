import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchModule } from '@elements/core/search/search.module';

import { AuthGuard } from '@elements/core/auth.guard';
import { HeaderComponent } from '@elements/core/header/header.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HomeEffects } from 'app/home/home.effect';
import { home } from 'app/home/home.reducer';
import { SharedModule } from '../shared/index';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ElementListDetailsComponent } from './element-list-details/element-list-details.component';
import { ElementListsComponent } from './element-lists/element-lists.component';
import { SchoolTypesComponent } from './school-types/school-types.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    SearchModule.forRoot(),
    StoreModule.forFeature('home', home),
    EffectsModule.forFeature([HomeEffects]),
    ChartsModule
  ],
  providers: [
    AuthGuard
  ],
  exports: [HeaderComponent],
  declarations: [
    HomeComponent,
    HeaderComponent,
    SchoolTypesComponent,
    ElementListsComponent,
    ElementListDetailsComponent,
    FavoritesComponent
  ]
})
export class HomeModule { }
