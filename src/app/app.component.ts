import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menus = [
    { label: 'Home', link: '/home'},
    { label: 'Projects', link: '/projects'},
    { label: 'Query Analyzer', link: '/query-analyzer'},
    //{ label: 'Test Manager', link: '/test-manager'}
  ]
}
