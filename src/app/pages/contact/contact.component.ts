import { Component } from '@angular/core';
import { ContactI } from 'src/app/shared/models/users-i';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
	contact: ContactI = {
		nom: '',
		prenom: '',
		age: 0,
		adresse: {rue: '', code_postal: 0, ville: '',},
		telephone: '',
		email: '',
		status: '',
		infos: '',
	};

	coucouToi() {
	}
}
