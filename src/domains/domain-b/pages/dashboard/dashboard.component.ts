import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-page',
  template: `
    <main-layout [withSidebar]="true">
      <h1>DomainB Dashboard Page</h1>
      <ul>
        <li *ngFor="let item of list">{{ item }}</li>
      </ul>
    </main-layout>
  `,
})
export class DashboardComponent {
  list = new Array(100).fill('Content');
}
