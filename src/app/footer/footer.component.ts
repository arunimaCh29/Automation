import { Component, OnInit } from '@angular/core';
import { faSignInAlt,  faHistory, faRobot } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, RoutesRecognized, Router } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  fasignIn = faSignInAlt;
  farobot= faRobot;
  history = faHistory;
  correctRoute:string;
  active =[] as Boolean[];
  constructor(private route: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.active.fill(false,0,3);
    this.active[0]=true;
    this.getPrevRoute();
  }

  activated(i:number) {
    this.active.fill(false,0,3);
    this.active[i]=true;
  }
getPrevRoute() {
  this.router.events
  .pipe(filter((e: any) => e instanceof RoutesRecognized),
      pairwise()
  ).subscribe((e: any) => {
      if( e[1].urlAfterRedirects != '/logout' && e[1].urlAfterRedirects != '/history') {
        this.correctRoute = e[1].urlAfterRedirects;
      }
      if(e[1].urlAfterRedirects == '/logout') {
        this.correctRoute = '/login';
      }
  });
}

  getRoute() {
   return this.route;
  }

  getRouteForbutton() {
    console.log(this.route);
    return this.route.firstChild.routeConfig.path;
  }

}
