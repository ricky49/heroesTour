import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { HeroService } from './hero.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import appRoutes from './app.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from 'app/hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    DashboardComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRoutes
  ],
  providers: [HeroService, MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
