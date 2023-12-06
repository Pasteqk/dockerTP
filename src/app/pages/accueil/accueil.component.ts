import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  title = 'Bienvenue sur noter super site de gestionnaire de soirée !';
  soustitre: string = "Une soirée se tient bientôt ! Aller dans la page événements pour être mis au courant et vous inscrire !";
  moustache: string = ""
  liste_moustache: Array<string> = ["Moustache", "Favoris"];

}
