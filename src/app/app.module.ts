import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BotPopUpComponent } from './bot-pop-up/bot-pop-up.component';
import { LoadersService } from './services/loaders.service';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BotDetailsComponent } from './bot-details/bot-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BotPopUpComponent,
    HeaderComponent,
    FooterComponent,
    BotDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    LoadersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
