import { Component } from '@angular/core';

@Component({
  selector: 'home-page',
  template: `
    <main-layout [withSidebar]="true">
      <h1>DomainB Home Page</h1>
    </main-layout>
  `,
})
export class HomeComponent {
}
