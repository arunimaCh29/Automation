import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bot-details',
  templateUrl: './bot-details.component.html',
  styleUrls: ['./bot-details.component.css']
})
export class BotDetailsComponent implements OnInit {

  @Input()
  fields;
  constructor() { }

  ngOnInit() {
  }

}
