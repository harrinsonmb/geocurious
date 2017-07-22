import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GameModeComponent } from './game-mode/game-mode.component';
import { ScoreComponent } from './score/score.component';

export const ROUTES: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'gamemode',  component: GameModeComponent },
  { path: 'score',  component: ScoreComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

