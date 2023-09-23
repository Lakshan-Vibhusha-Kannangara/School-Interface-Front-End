import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router, private activatedRoute: ActivatedRoute){
    
  }
  title = 'application';

  shouldShowNavbar(): boolean {
    // Determine whether to show the navbar based on the current route
    const currentRoute = this.activatedRoute.firstChild;
    if (currentRoute) {
      const routePath = currentRoute.routeConfig?.path;
      // Add logic to conditionally show the navbar for specific routes
      // For example, show it for all routes except '/login'
      return routePath !== 'login';
    }
    return true; // Show the navbar by default
  }
}

