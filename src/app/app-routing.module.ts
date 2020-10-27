import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'domain-a',
  },
  {
    path: 'domain-a',
    loadChildren: () => import('../domains/domain-a/domain-a.module').then((m) => m.DomainAModule),
  },
  {
    path: 'domain-b',
    loadChildren: () => import('../domains/domain-b/domain-b.module').then((m) => m.DomainBModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
