import { Component, OnInit } from '@angular/core';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  fasignOut = faSignOutAlt;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }
  getRouteForbutton() {
return this.route.firstChild.routeConfig.path;
  }
}
