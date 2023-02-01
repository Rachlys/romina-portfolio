import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import {DragDropModule} from '@angular/cdk/drag-drop'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './nav/nav.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { WindowComponent } from './window/window.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ContactMeComponent,
    HomeComponent,
    HeaderComponent,
    NavComponent,
    SobreMiComponent,
    WindowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DragDropModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
