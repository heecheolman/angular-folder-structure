import { NgModule } from '@angular/core';
import { MainModule } from '../../shared/layouts/main/main.module';
import { DomainARoutingModule } from './domain-a-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  imports: [
    DomainARoutingModule,
    MainModule
  ],
  declarations: [
    HomeComponent,
    DashboardComponent,
  ]
})
export class DomainAModule {
}
