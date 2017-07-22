import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GameModeComponent } from './game-mode/game-mode.component';
import { ScoreComponent } from './score/score.component';

import { ROUTES } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    GameModeComponent,
    HomeComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
