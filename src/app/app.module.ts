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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EventsPipe } from './shared/pipes/events.pipe';
import { EvenementComponent } from './pages/evenement/evenement.component';
import { TokenInterceptor } from './shared/securite/token.interceptor';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';

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
    EvenementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	  FormsModule,
	  HttpClientModule,
   provideFirebaseApp(
    () => initializeApp(
      {"projectId":"cy2023-antoine",
      "appId":"1:967499868780:web:b981555575959568ff0649",
      "storageBucket":"cy2023-antoine.appspot.com",
      "apiKey":"AIzaSyCBAXZwyRKnB-UTgoFocGwElstLsu8hUAs",
      "authDomain":"cy2023-antoine.firebaseapp.com",
      "messagingSenderId":"967499868780"})),
   provideAuth(() => getAuth()),
   provideFirestore(() => getFirestore()),
   provideDatabase(() => getDatabase()),
   provideStorage(() => getStorage()),
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
