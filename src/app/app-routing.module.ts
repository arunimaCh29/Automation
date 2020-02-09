import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BotPopUpComponent } from './bot-pop-up/bot-pop-up.component';
import { LoginComponent } from './login/login.component';
import { ResolverService } from './services/resolver.service';


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

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
