import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BotPopUpComponent } from './bot-pop-up/bot-pop-up.component';


const routes: Routes = [
  {
    path: 'bot-pop-up',
    component: BotPopUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
