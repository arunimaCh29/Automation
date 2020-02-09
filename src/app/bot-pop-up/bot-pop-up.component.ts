import { Component, OnInit} from '@angular/core';
import { LoadersService } from '../services/loaders.service';
import { BotConfiguration } from '../models/botConfiguration';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bot-pop-up',
  templateUrl: './bot-pop-up.component.html',
  styleUrls: ['./bot-pop-up.component.css']
})
export class BotPopUpComponent implements OnInit {

selectedBot: BotConfiguration;
bot;
file;

  constructor(private fileLoader: LoadersService) { }

  ngOnInit() {
    this.bot= null;
    this.fileLoader.getConfigFile().subscribe(val=> {
      this.file= val.bots;
    });
  }

stringify(text) {
  return JSON.stringify(text);
}
  changeBot() {
    this.selectedBot = JSON.parse(this.bot);
  }
}
