import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import {DragDropModule} from '@angular/cdk/drag-drop'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { WindowComponent } from './window/window.component';
import { WindowNavComponent } from './window-nav/window-nav.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { WindowFormComponent } from './window-form/window-form.component';
import { HoraComponent } from './hora/hora.component';
import { EmailService } from './email.service';
import { BackgroundComponent } from './background/background.component';
import { MainTextComponent } from './main-text/main-text.component';
import { MainImagenComponent } from './main-imagen/main-imagen.component';
import { MainLogosPopComponent } from './main-logos-pop/main-logos-pop.component';
import { MainLogosComponent } from './main-logos/main-logos.component';
import { MainListaPopComponent } from './main-lista-pop/main-lista-pop.component';
import { MainListaComponent } from './main-lista/main-lista.component';
import { MainLightboxComponent } from './main-lightbox/main-lightbox.component';
import { MainLogosGrandesComponent } from './main-logos-grandes/main-logos-grandes.component';
import { MainLogoUnicoComponent } from './main-logo-unico/main-logo-unico.component';
import { FooterComponent } from './footer/footer.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    HomeComponent,
    NavComponent,
    WindowComponent,
    WindowNavComponent,
    PopUpComponent,
    WindowFormComponent,
    HoraComponent,
    BackgroundComponent,
    MainTextComponent,
    MainImagenComponent,
    MainLogosPopComponent,
    MainLogosComponent,
    MainListaPopComponent,
    MainListaComponent,
    MainLightboxComponent,
    MainLogosGrandesComponent,
    MainLogoUnicoComponent,
    FooterComponent,
    SobreMiComponent,
    ProyectosComponent,
    ContactMeComponent,
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
