import { Component } from '@angular/core';
import { firebaseApp$ } from '@angular/fire/app';
import { FormsModule } from '@angular/forms';
import { UsersI } from 'src/app/shared/models/users-i';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
	constructor(public auth: AuthService, public user: UsersService) {}

	title = 'S\'inscrire';

	formData = {
		email: '',
		nom: '',
		prenom: '',
		password: '',
		validation_password: '',
		status: 'users',
		token: ''
	};

	onSubmit() {
		if (this.formData.password != this.formData.validation_password) {
			console.error("The two password must be identical.");
			return;
		}
		if (this.formData.password.length < 6) {
			console.error("The password should be at least 6 characters long.");
			return;
		}
		this.user.newUser(
			{nom: this.formData.nom,
			prenom: this.formData.prenom,
			email: this.formData.email,
			status: 'user',
			token: ''},
			 this.formData.email, this.formData.password);
	}
}
