import { Component, OnInit } from '@angular/core';
import { LoadersService } from '../services/loaders.service';

@Component({
  selector: 'app-bot-pop-up',
  templateUrl: './bot-pop-up.component.html',
  styleUrls: ['./bot-pop-up.component.css']
})
export class BotPopUpComponent implements OnInit {

selectedBotName;
file;

  constructor(private fileLoader: LoadersService) { }

  ngOnInit() {

    this.fileLoader.getConfigFile().subscribe(val=> {
      this.file= val;
      console.log(val);
    });

document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#botSelector').addEventListener('click', this.selectedBot);
})
  }

selectedBot(){
    this.selectedBotName = document.getElementById('botSelector').nodeValue;
    //alert("You selected: " + selectedBotName);

    if (this.selectedBotName == 'eBay Auction Sniper Bot'){
        document.querySelector('#customBotFields').innerHTML = `
        <div class="form-group">
            <label>Auction URL</label>
            <input type="text" class="form-control" id="auctionURL" placeholder="Full URL of Auction">
        </div>
        <div class="form-group">
            <label>Maximum Bid</label>
            <input type="text" class="form-control" id="maximumBid" placeholder="Highest Amount You'll Bid">
        </div>
            <div class="submitButton">
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>`
    }
    if (this.selectedBotName == 'Select a Bot'){
        document.querySelector('#customBotFields').innerHTML = ``
    }
    if (this.selectedBotName == 'Price Check Bot'){
        document.querySelector('#customBotFields').innerHTML = `
        <div class="form-group">
            <label>Amazon URL for Item</label>
            <input type="text" class="form-control" id="auctionURL" placeholder="Amazon URL">
        </div>
        <br>
        <label>Cross Check Against</label><br>
        <div class="flex-container">
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                <label class="form-check-label" for="inlineCheckbox1">Best Buy</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                <label class="form-check-label" for="inlineCheckbox2">Walmart</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3">
                <label class="form-check-label" for="inlineCheckbox3">Target</label>
            </div>
        </div>
        <div class="submitButton">
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>`
    }
    if (this.selectedBotName == 'Car Buyer Bot'){
        document.querySelector('#customBotFields').innerHTML = `
        <div class="form-group">
            <label>Car Make</label>
            <input type="text" class="form-control" id="carMake" placeholder="Name of Make">
        </div>
        <div class="form-group">
            <label>Car Model</label>
            <input type="text" class="form-control" id="carModel" placeholder="Name of Model">
        </div>
        <div class="form-group">
            <label>Search Radius (in miles)</label>
            <select class="form-control" id="botSelector">
                <option value="10">10 mi</option>
                <option value="25">25 mi</option>
                <option value="50">50 mi</option>
                <option value="100">100 mi</option>
        </select>
        </div>
            <div class="submitButton">
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>`
    }
}

}
