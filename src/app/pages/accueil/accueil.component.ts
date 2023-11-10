import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  title = 'Welcome';
  soustitre: string = "sous-titre";
  moustache: string = "Ceci est une moustache";
  liste_moustache: Array<string> = ["Moustache", "Favoris"];

}
