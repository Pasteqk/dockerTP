import { Injectable } from '@angular/core';
import { EvenementI } from 'src/app/shared/models/evenement-i';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EvenementsService {
  listeEvents: Array<EvenementI> = [];

  constructor(private http: HttpClient) {
	  this.getEvenements();
  }

  getEvenements() {
	  this.http.get<Array<EvenementI>>('assets/data/evenements.json').subscribe(
		  {
			  next:(ev) => {
				  console.log("Données reçues du JSON", ev);
				  this.listeEvents = ev;
			  },
			  error: (er) => console.log(er),
			  complete:() => console.log('Les événements ont été chargés')
		  }
	  )
  }
}
