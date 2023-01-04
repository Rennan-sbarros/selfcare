import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeNavbarComponent } from './components/home-navbar/home-navbar.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    HomeNavbarComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
