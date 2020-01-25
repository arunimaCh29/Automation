import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BotPopUpComponent } from './bot-pop-up/bot-pop-up.component';
import { LoadersService } from './services/loaders.service';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BotDetailsComponent } from './bot-details/bot-details.component';
import { ControlRoomService } from './services/control-room.service';

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
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    LoadersService,
    ControlRoomService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
