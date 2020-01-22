import { Component, OnInit } from '@angular/core';
import { LoadersService } from '../services/loaders.service';

@Component({
  selector: 'app-bot-pop-up',
  templateUrl: './bot-pop-up.component.html',
  styleUrls: ['./bot-pop-up.component.css']
})
export class BotPopUpComponent implements OnInit {

selectedBot;
file;

  constructor(private fileLoader: LoadersService) { }

  ngOnInit() {
    this.selectedBot= null;
    this.fileLoader.getConfigFile().subscribe(val=> {
      this.file= val.bots;
      console.log(val.bots);
    });
  }

  change() {
    console.log("onchange"+this.selectedBot);
  }
}
