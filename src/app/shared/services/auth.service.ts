import { Router } from '@angular/router';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersI } from 'src/app/shared/models/users-i';
import { Auth, signInWithEmailAndPassword, signOut, User, createUserWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	profil!: UsersI;
	firebaseUser?: User = undefined;
	authID: { id: string, mdp: string } = {
		id: '',
		mdp: ''
	};

	fire = inject(Auth);

	constructor(
		private http: HttpClient,
		private router: Router,
	) { }

	authentification() {
		// Doit appeler le fichier heidi@heidi64.json sachant que heidi est l'id
		// saisi et heidi64 le mot de passe
		// Ça donnera une concaténation sur la requête http comme celle-ci:
		// `$(this.authID.id}@$(this.authID.mdp).json`
		this.http.get<UsersI>(
			`assets/data/ids/${this.authID.id}@${this.authID.mdp}.json`).subscribe(
				{
					next: (ev) => {
						this.profil = ev;
						this.router.navigateByUrl('/');
					},
					error: (er) => console.log('User not found', er),
					complete: () => console.log('Les événements ont été chargés')
				}
			)
	}

	isLoggedIn() {
        return !(this.firebaseUser === undefined);
	}
	
	
	fireAuth() {
		signInWithEmailAndPassword(
			this.fire,
			this.authID.id,
			this.authID.mdp
		).then(infos => {
			this.firebaseUser = infos.user;
			console.log(infos, infos.user);
		}).catch(er => console.log(er));
	}

	fireSignOut() {
		signOut(this.fire).then(() => {
			this.firebaseUser = undefined;
		}).catch((er) => {
			console.log(er)
		});

	}

	async createUser(login: string, password: string): Promise<User|null>{
        return createUserWithEmailAndPassword(
            this.fire,
            login,
            password
        ).then((userInfos) => {
            this.firebaseUser = userInfos.user;
			return this.firebaseUser;
        }).catch((er) => {
            console.log(er);
			return(null);
        });
    }

}