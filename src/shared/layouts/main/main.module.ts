import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [
    MainComponent,
  ],
  exports: [
    MainComponent,
  ],
})
export class MainModule {
}
