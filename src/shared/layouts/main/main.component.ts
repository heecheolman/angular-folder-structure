import { Component, Input } from '@angular/core';

@Component({
  selector: 'main-layout',
  template: `
    <header>
      <div>
        <h3 style="margin: 0;">DomainA</h3>
        <a [routerLink]="['/domain-a/home']">Home</a>
        <a [routerLink]="['/domain-a/dashboard']">Dashboard</a>
      </div>
      <div>
        <h3 style="margin: 0;">DomainB</h3>
        <a [routerLink]="['/domain-b/home']">Home</a>
        <a [routerLink]="['/domain-b/dashboard']">Dashboard</a>
      </div>
    </header>
    <div class="main-layout" [class.main-layout-sidebar]="withSidebar">
      <aside *ngIf="withSidebar">
        사이드바
        <ul>
          <li *ngFor="let item of list">{{ item }}</li>
        </ul>
      </aside>
      <main class="main-layout-content">
        <ng-content></ng-content>
      </main>
    </div>
  `,
  styles: [`
    header {
      display: flex;
      align-items: center;
      position: fixed;
      top: 0;
      width: 100%;
      height: 60px;
      background-color: #f0f0f0;
      padding: 0 48px;
    }

    a {
      margin-right: 12px;
    }

    .main-layout {
      padding-top: 60px;
      height: 100%;
      overflow: hidden;
    }

    .main-layout-content {
      display: block;
      width: 100%;
      height: 100%;
      overflow: scroll;
    }

    .main-layout-sidebar {
      width: 100%;
      display: flex;
      flex-direction: row;
    }

    .main-layout-sidebar > aside {
      width: 230px;
      height: 100%;
      background-color: #e3e3e3;
      overflow: scroll;
    }
  `]
})
export class MainComponent {
  @Input() withSidebar = false;
  list = new Array(100).fill('메뉴');
}
