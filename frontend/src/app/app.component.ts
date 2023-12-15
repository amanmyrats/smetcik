import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ChildrenOutletContexts, NavigationEnd, Router } from '@angular/router';
import { InputActions } from 'src/app/models/enum';
import { MenuItem } from 'primeng/api';
import { filter } from 'rxjs';
import { navItems } from 'src/app/_nav';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'smetcik';
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
    private contexts: ChildrenOutletContexts,
    translate: TranslateService,
    ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('fr');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('fr');

    
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
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

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