import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersI } from 'src/app/shared/models/users-i';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user!: UsersI;

  authID: {id: string, mdp: string} = {
	  id: '',
	  mdp: ''
  };

  constructor(
	  private http: HttpClient,
	  private router: Router,
  ) { }

  authentification() {
	  // Doit appeler le fichier heidi@heidi64.json sachant que heidi est l'id
	  // saisi et heidi64 le mot de passe
	  // Ça donnera une concaténation sur la requête http comme celle-ci:
	 // `$(this.authID.id}@$(this.authID.mdp).json`
	  this.http.get<UsersI>(`assets/data/ids/${this.authID.id}@${this.authID.mdp}.json`).subscribe(
		  {
			  next:(ev) => {
				  this.user = ev;
				  this.router.navigateByUrl('/');
			  },
			  error: (er) => console.log('User not found'),
			  complete:() => console.log('Les événements ont été chargés')
		  }
	  )
  }
}
