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

  shouldShowNavbar(): boolean {    const currentRoute = this.activatedRoute.firstChild;
    if (currentRoute) {
      const routePath = currentRoute.routeConfig?.path;

      return (routePath !== 'login' && routePath !== 'signup');

    }
    return true; 
  }
}

