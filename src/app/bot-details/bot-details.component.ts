import { Component, OnInit, Input, SimpleChanges, OnChanges, SimpleChange  } from '@angular/core';
import { BotConfiguration } from '../models/botConfiguration';
import { Field } from '../models/field';

@Component({
  selector: 'app-bot-details',
  templateUrl: './bot-details.component.html',
  styleUrls: ['./bot-details.component.css']
})
export class BotDetailsComponent implements OnInit, OnChanges {

  @Input()
  Bot :BotConfiguration;
  fields: Field[];
  constructor() { }

  ngOnInit() {
    this.fields = this.Bot.fields;
  }


  ngOnChanges(changes:SimpleChanges) {
    let change: SimpleChange = changes.Bot ;
    this.Bot = change.currentValue;
    this.fields = this.Bot.fields;
    console.log(this.fields);

  }

}
