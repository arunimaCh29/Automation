import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


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
import { UserService } from './services/user.service';
import { ResolverService } from './services/resolver.service';
import { HistoryComponent } from './history/history.component';
import { LogoutComponent } from './logout/logout.component';
import { UserHistoryService } from './services/user-history.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BotPopUpComponent,
    HeaderComponent,
    FooterComponent,
    BotDetailsComponent,
    HistoryComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule

  ],
  providers: [
    LoadersService,
    ControlRoomService,
    UserService,
    ResolverService,
    UserHistoryService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
