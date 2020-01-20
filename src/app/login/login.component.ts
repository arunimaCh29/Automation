import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nextPage: boolean;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.nextPage = false;
  }

  authenticate() {
    this.nextPage = true;
  }
}
