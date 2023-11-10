import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { UsersComponent } from './pages/users/users.component';
import { EvenementsComponent } from './pages/evenements/evenements.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { MentionsComponent } from './pages/mentions/mentions.component';
import { RgpdComponent } from './pages/rgpd/rgpd.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
	{path: '', component:AccueilComponent},
	{path: 'profil', component:ProfilComponent},
	{path: 'utilisateurs', component:UsersComponent},
	{path: 'evenements', component:EvenementsComponent},
	{path: 'inscription', component:InscriptionComponent},
	{path: 'connexion', component:ConnexionComponent},
	{path: 'mentions', component:MentionsComponent},
	{path: 'rgpd', component:RgpdComponent},
	{path: 'contact', component:ContactComponent},
	{path: 'organisation' , loadChildren: () => import('./organisation/organisation.module').then(m => m.OrganisationModule)},
	{path: '**', component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
