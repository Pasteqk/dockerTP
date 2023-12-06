import { Component } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {
  constructor(public auth: AuthService, public user: UsersService) {}

	formData = {
		login: '',
		nom: '',
		prenom: '',
    email: this.auth.profil.email,
    status: this.auth.profil.status
	};

	onSubmit() {
        this.user.gereDoc(this.formData);
	}
}
