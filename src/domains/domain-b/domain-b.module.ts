import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainModule } from '../../shared/layouts/main/main.module';
import { DomainBRoutingModule } from './domain-b-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  imports: [
    DomainBRoutingModule,
    MainModule,
    CommonModule
  ],
  declarations: [
    HomeComponent,
    DashboardComponent,
  ],
})
export class DomainBModule {
}
