import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BotPopUpComponent } from './bot-pop-up/bot-pop-up.component';
import { LoginComponent } from './login/login.component';
import { ResolverService } from './services/resolver.service';
import { HistoryComponent } from './history/history.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  { path: '', redirectTo: '/bot-pop-up', pathMatch: 'full' },
  {
    path: 'bot-pop-up',
    component: BotPopUpComponent,
    resolve: {
      user: ResolverService
    }
  },
  {
    path: 'login',
    component: LoginComponent,

  },
  {
    path: 'logout',
    component: LogoutComponent,

  },
  {
    path: 'history',
    component: HistoryComponent,

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
