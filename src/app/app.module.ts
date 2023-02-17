import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { WindowNavComponent } from './window-nav/window-nav.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { WindowFormComponent } from './window-form/window-form.component';
import { HoraComponent } from './hora/hora.component';
import { EmailService } from './email.service';
import { BackgroundComponent } from './background/background.component';

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
    WindowNavComponent,
    PopUpComponent,
    WindowFormComponent,
    HoraComponent,
    BackgroundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DragDropModule

  ],
  providers: [
    EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
