import { Component, OnInit } from '@angular/core';
import { faSignInAlt, faSignOutAlt, faHistory } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, RouterState } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  fasignIn = faSignInAlt;
  fasignOut = faSignOutAlt;
  history = faHistory;
  active =[] as Boolean[];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.active.fill(false,0,3);
    this.active[0]=true;
  }

  activated(i:number) {
    this.active.fill(false,0,3);
    this.active[i]=true;
  }

  // getRoute() {
  //   console.log(this.route.snapshot);
  //   this.route.firstChild.url.subscribe(res => {
  //     console.log(res);
  //       return res['UrlSegment']['path'];
  //     });
  // }

}
