import { Component, Input } from '@angular/core';
import { ActivatedRouteSnapshot, ChildrenOutletContexts, NavigationEnd, Router } from '@angular/router';
import { navItems } from 'src/app/_nav';
import { AuthenticationService } from 'src/app/services/auth.service';
import { InputActions } from 'src/app/models/enum';
import { MenuItem } from 'primeng/api';
import { filter } from 'rxjs';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent {
  public navItems = navItems;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;

  public minimizedMenu: boolean = true;

  public currentUser: any;

  public items: MenuItem[];

  public breadcrumbs: MenuItem[] = [];
  
  public home: MenuItem;

  constructor(
    private router: Router, 
    // private _authService: AuthenticationService, 
    private contexts: ChildrenOutletContexts
    ) {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd) 
    ).subscribe(event => {
      const url: String = this.router.routerState.snapshot.url;
      const data = this.contexts.getContext('primary')?.route?.snapshot?.data;
      const breadcrumbs: MenuItem[] = [];
      if (data) { 
        const breadcrumb = { 
          // label: data.breadcrumb, 
          url: '#' + url
        }; 
        breadcrumbs.push(breadcrumb); 
      }
      this.breadcrumbs = breadcrumbs;
      this.home = {icon: 'pi pi-home', routerLink: '/'};
      this.minimizedMenu = true;
    }); 
  }

  public ngOnInit() {
    // this.currentUser = this._authService.getCurrentUser();
    this.items = navItems.map((eachItem) => {
      return {
        label: eachItem.name,
        icon: eachItem.icon,
        url: eachItem.url,
        styleClass: eachItem.title ? 'title' : ''
      };
    });
  }

  public executeAction(action: string): void {
    switch(action) {
      case InputActions.setting:
        return;
      case InputActions.admin:
        return this.navigateToAdminDashboard();
      case InputActions.logout:
        return this.logOut();
    }
  }

  private logOut(): void {
    // this._authService.logout();
    this.router.navigate(['/login']);
  }

  private navigateToAdminDashboard(): void {
    console.log("navigating to admin dashboard");
  }
}
