import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatTabsModule, MatListModule, MatExpansionModule, MatInputModule, MatIconModule, MatIconRegistry, } from '@angular/material';

import { AppComponent } from './app.component';
import { RatePlayerComponent } from './players/rate-player/rate-player.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app-routing.module';
import { PlayerComponent } from './players/player/player.component';
import { HttpClientModule } from '@angular/common/http';

import { ChartsModule } from 'ng2-charts';
import { RatingService } from './services/rating.service';
import { PlayersService } from './services/players.service';
import { FormsModule } from '@angular/forms';
import { PlayerListComponent } from './players/player-list/player-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RatePlayerComponent,
    PlayerComponent,
    PlayerListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatExpansionModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [RatingService, PlayersService, MatIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public matIconRegistry: MatIconRegistry) {
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }
 }
