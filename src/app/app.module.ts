import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './template/footer/footer.component';
import { MenuComponent } from './template/menu/menu.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { UsersComponent } from './pages/users/users.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { EvenementsComponent } from './pages/evenements/evenements.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { ErreurComponent } from './pages/erreur/erreur.component';
import { MentionsComponent } from './pages/mentions/mentions.component';
import { RgpdComponent } from './pages/rgpd/rgpd.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorComponent } from './pages/error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { EventsPipe } from './shared/pipes/events.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    AccueilComponent,
    UsersComponent,
    ProfilComponent,
    EvenementsComponent,
    InscriptionComponent,
    ConnexionComponent,
    ErreurComponent,
    MentionsComponent,
    RgpdComponent,
    ContactComponent,
    ErrorComponent,
    EventsPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
	HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
