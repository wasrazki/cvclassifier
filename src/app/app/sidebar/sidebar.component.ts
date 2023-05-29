import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/upload/cv', title: 'Upload CV',  icon:'pe-7s-users', class: 'link'},
    { path: '/all/cv', title: 'All Cv',  icon:'ni-planet text-blue', class: '' },
   
];

@Component({
  selector: 'app-sidebar',
<<<<<<< HEAD
  templateUrl: './sidebar.component.html'/*,
  styleUrls: ['./sidebar.component.scss']*/
=======
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
>>>>>>> 68dec48bb2e871b607a923652d5f106cba437150
})
export class SidebarComponent implements OnInit {

  public menuItems!: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
